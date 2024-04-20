import React from "react";

const Skill = ({ image, text, alt }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card">
              <img src={image} className="card-img-top" alt={alt} />
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
