// import React, { useState } from "react";
// import "./BgImg.css";
// import { assets } from "../../assets/assets";

// const BgImg = () => {
//   const [sliderPosition, setSliderPosition] = useState(50);

//   const handleSliderChange = (e) => {
//     setSliderPosition(e.target.value);
//   };

//   return (
//     <div className="title">
//       {/* title */}
//       <h1 className="title-text">
//         Remove Background With High Quality and Accuracy
//       </h1>

//       <div className="slider-img">
//         {/* bg Image */}
//         <img
//           src={assets.image_w_bg}
//           style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
//           alt="With background"
//         />
//         {/* forground img */}
//         <img
//           src={assets.image_wo_bg}
//           style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
//           alt="Without background"
//         />

//         {/* Slider */}
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={sliderPosition}
//           onChange={handleSliderChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default BgImg;



import React, { useState, useRef } from "react";
import "./BgImg.css";
import { assets } from "../../assets/assets";

const BgImg = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const handleMouseMove = (e) => {
      const container = sliderRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const containerWidth = container.offsetWidth;
      const position = (x / containerWidth) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchMove = (e) => {
    const container = sliderRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const containerWidth = container.offsetWidth;
    const position = (x / containerWidth) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="title">
      <h1 className="title-text">
        Remove Background With High Quality and Accuracy
      </h1>

      <div 
        className="slider-img" 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => e.preventDefault()}
      >
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          alt="With background"
          draggable="false"
        />
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Without background"
          draggable="false"
        />
        <div 
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-handle">
            <span className="slider-arrows">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgImg;
