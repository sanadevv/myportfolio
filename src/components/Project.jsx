import React from "react";

const Project = ({
  image,
  alt,
  title,
  description,
  skill1,
  skill2,
  skill3,
  link,
  modalId,
}) => {
  return (
    <div className="col-sm-6 mb-3 mb-sm">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={modalId}
      >
        <div className="card">
          <img src={image} className="card-img-top .img-fluid" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{skill1}</li>
            <li className="list-group-item">{skill2}</li>
            <li className="list-group-item">{skill3}</li>
          </ul>
          <div className="card-body">
            <a href={link} className="card-link">
              Code
            </a>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Project;
