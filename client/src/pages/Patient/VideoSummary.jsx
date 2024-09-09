import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const VideoSummary = () => {
  const [uploaded, setUploaded] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("video", videoFile);
      const response = await axios.post("http://localhost:3000/api/ai/summarize", {
        question:
          "What they forget to mention there is the following. When you're reading the book, you can't just read like this. You can't just every day just go, this does not simply mean that there will be no dramatic surprises. It means simply that there must be no surprises which do not as they unfold as that doesn't make sense for the audience. You can't read like that. Reading like that, it's not deliberate practice. Deliberate practice when it comes to communication is you must read as if you're presenting for an audience then you improve. And you must read in a way where you play with all your foundations too. So if you read in a way where you did this, before leaving the subject of the conflicted situation that occurred, I wanted to point out that the performer's conflict needs to involve other people. Again, so using all the emotions and all the foundations, high levels of effort during practice will transfer more of those skills into your everyday life.",
      });
      setSummary(response.data.result);
    } catch (error) {
      console.error("Error generating summary:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideoFile(file);
    setUploaded(true);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "video/*",
  });

  return (
    <div className="mx-3 bg-slate-200 rounded-md w-2/3 shadow-md items-center flex flex-col py-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Upload the Video to Summarize
      </h1>

      <div
        className="h-56 w-1/2 border border-dashed border-blue-400 rounded-lg mt-4 flex items-center justify-center bg-white"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {videoFile ? (
          <video controls className="mt-4 max-w-full max-h-64 mx-auto">
            <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Drag 'n' drop a video here, or click to select a file</p>
        )}
      </div>
      <button
        className="btn btn-primary w-1/2 my-7"
        onClick={handleGenerate}
        disabled={!uploaded || isLoading}
      >
        {isLoading ? "Generating..." : "Generate"}
      </button>

      <div className="w-full mt-6 px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Summary</h2>
        <div className="bg-white rounded-lg p-4 shadow-sm h-32 overflow-y-auto">
          <p className="text-sm text-gray-600">
            {summary ||
              "No summary available. Please upload a video to generate a summary."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSummary;
