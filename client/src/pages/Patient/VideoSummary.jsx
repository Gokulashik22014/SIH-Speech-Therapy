import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
const VideoSummary = () => {
  const [uploaded, setUploaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // console.log(binaryStr); // Logs the binary string of the image
        setImageSrc(binaryStr);
        setUploaded(true);
        console.log(imageSrc)
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="mx-3 bg-slate-200 rounded-md w-2/3 shadow-md items-center flex flex-col py-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Upload the Video to Summarize
      </h1>

      {/* Video Upload Section */}
      <div
        className="h-56 w-1/2 border border-dashed border-blue-400 rounded-lg mt-4 flex items-center justify-center bg-white"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {/* {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : uploaded ? (
          <div className="h-full w-full">
            <img src={imageSrc} alt="" />
          </div>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )} */}
        <div className="h-full w-full">
            <img src={imageSrc} alt="" />
          </div>
      </div>
      <button className="btn btn-primary w-1/2 my-7">Generate</button>
      {/* Summary Section */}
      <div className="w-full mt-6 px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Summary</h2>
        <div className="bg-white rounded-lg p-4 shadow-sm h-32 overflow-y-auto">
          <p className="text-sm text-gray-600">
            No summary available. Please upload a video to generate a summary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSummary;
