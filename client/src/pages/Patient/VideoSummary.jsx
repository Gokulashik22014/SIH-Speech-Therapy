import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const VideoSummary = () => {
  const [uploaded, setUploaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sample = async () => {
    axios
      .get("https://ac36-34-148-199-54.ngrok-free.app/", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => console.log(res));
  };
  useEffect(() => {
    sample();
  }, []);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      setVideoSrc(reader.result);
      setUploaded(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "video/*",
  });

  const handleGenerate = async () => {
    if (!videoSrc) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", dataURItoBlob(videoSrc), "video.mp4");

    try {
      const response = await axios.post(
        "https://ac36-34-148-199-54.ngrok-free.app/summarize",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummary("Error generating summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to convert Data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

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
        {videoSrc ? (
          <video controls className="mt-4 max-w-full max-h-64 mx-auto">
            <source src={videoSrc} type="video/mp4" />
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
