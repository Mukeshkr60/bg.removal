import React, { useState } from "react";
import "./Upload.css";
import { assets } from "../../assets/assets";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can add your file upload logic here
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div>
      <h1 className="upload-text">See the magic. Try now</h1>

      <div className="upload-but">
        <input
          type="file"
          name="file-upload"
          id="upload2"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="upload2" className="rainbow-border">
          <img
            src={assets.upload_btn_icon}
            alt="Upload icon"
            className="upload-icon"
          />
          <p className="upload-small">
            {selectedFile ? selectedFile.name : "Upload"}
          </p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
