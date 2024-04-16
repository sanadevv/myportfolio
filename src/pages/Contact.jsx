import React from "react";

const Contact = () => {
  return (
    <div className="form-container">
      <h1>Formulaire de contact</h1>
      <form>
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
      </form>
    </div>
  );
};

export default Contact;
