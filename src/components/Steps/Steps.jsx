import React from "react";
import "./Steps.css";
import { assets } from "../../assets/assets";

const Steps = () => {
  return (
    <div className="steps-main-container">
      <h1 className="steps-cente-text">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="main-img-cont">
        <div className="img">
          <img src={assets.upload_icon} alt="" />
          <div>
            <p className="upload-text">Upload image</p>
            <p className="upload-small-text">Users begin by uploading an image directly from their device into the app.</p>
          </div>
        </div>

        <div className="img">
          <img src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="upload-text">Remove background</p>
            <p className="upload-small-text">Detects and removes backgrounds to isolate subjects,
                 useful for creating transparent images or replacing backgrounds.</p>
          </div>
        </div>

        <div className="img">
          <img src={assets.download_icon} alt="" />
          <div>
            <p className="upload-text">Download image</p>
            <p className="upload-small-text">After finalizing the edits, users can download the image in their desired format and quality, ready for sharing or printing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
