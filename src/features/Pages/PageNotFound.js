import React from 'react'
import "../styles/PageNotFound.css";
import logo from "../img/logo.svg";

function PageNotFound() {
  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-PageNotFound">404 PAGE NOT FOUND</h1>
      </div>
      <div className="PageNotFound-Container">
          <p className="Description-PageNotFound"> You can got back to the main page by clicking in HOME.</p>
          <p className="Description-PageNotFound">Thank you very much!</p>
          <img style={{ width: "150px" }} src={logo} alt=""></img>
      </div>
    </div>
  )
}

export default PageNotFound;