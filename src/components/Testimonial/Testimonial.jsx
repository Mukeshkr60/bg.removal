import React from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../assets/assets";

const Testimonial = () => {
  return (
    <div className="testimonial">
      {/* title */}
      <h1 className="testimonial-text">Customer Testimonials</h1>

      {testimonialsData.map((item, index) => (
        <div key={index} className="testimonial-item">
          <p>"</p>
          <p>{item.text}"</p>
          <div className="testimonial-author">
            <img src={item.image} alt={`${item.author}'s portrait`} />
            <div>
              <p className="author-name">{item.author}</p>
              <p className="author-job">{item.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
