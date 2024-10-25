import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div>
      {/* {Left side} */}
      <div className="left-side-container">
        <h1 className="left-side-big-text">
          Remove the <br /> <span>background </span> from <br /> image for free.
        </h1>
      </div>
      <p className="left-side-text">
      This bg.removal provides a simple guide to free online tools for background removal,
       including Remove.bg and Edit.bg. Each tool is accessible
        and user-friendly, allowing for easy, high-quality background removal without complex software.
      </p>
      <div className="left-side-button">
        <input type="file" name="" id="upload1" hidden />
        <label htmlFor="upload1">
          <img src={assets.upload_btn_icon} alt="" />
          <p>Upload your image</p>
        </label>
      </div>

      {/* // {Right} side} */}
      <div className="left-side-container">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
