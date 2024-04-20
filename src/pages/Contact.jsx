import React from "react";

const Contact = () => {
  return (
    <div className="form-container">
      <h1>Contact me</h1>
      {/* <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="firstname" placeholder="Your name" />

        <label htmlFor="sujet">Subject</label>
        <input type="text" id="sujet" name="sujet" placeholder="The subject" />

        <label htmlFor="emailAddress">Email</label>
        <input
          id="emailAddress"
          type="email"
          name="email"
          placeholder="Your email"
        />

        <label htmlFor="subject">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Your message"
        ></textarea>

        <input type="submit" value="Envoyer" />
      </form> */}
      <form>
        <div className="row mb-3 ">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="validationCustom01"
            className="col-sm-2 col-form-label"
          >
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="subject" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
