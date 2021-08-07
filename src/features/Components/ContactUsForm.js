import React, { useState } from "react";
import logo from "../img/logo.svg";

function FormPage() {
  const [email, updateEmail] = useState("");
  const emailOnChange = (e) => {
    updateEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      if (email.includes("@") && email.length > 3 && domainValid(email)) {
        alert(
          "Thank you for your message, we will get back to you as soon as possible!"
        );
      } else {
        alert("Data invalid, please check your data");
      }
    } else {
      alert("Full Name, email and message needs to be filled out!");
    }
    e.target.reset();
  };

  const domainValid = (email) => {
    const domain = email.split("@")[1];
    if (domain.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="Title-Container">
          <h1 className="Title-Contact">contact us</h1>
        </div>
      <div className="form-container">
        <div className="form-wrap">
          <div className="profile">
            <img className="form-logo" alt="logo" src={logo} />
            <h2>Stay in touch!</h2>
          </div>
          <form method="post" action="fakepage.js" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. janedoe@domain.com"
                onChange={emailOnChange}
              />
            </div>
            <textarea
              className="input-message"
              cols={30}
              rows={10}
              placeholder="Message....."
              defaultValue={""}
              minLength="10"
              maxLength="150"
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormPage;