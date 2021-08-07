import React from 'react';
import '../styles/About.css';
import logo from "../img/logo.svg";
import fashionstore from "../img/fashionstore.jpg";
import ScrollButton from "../Components/ScrollButton"

export default function About() {
  return (
    <div className="Container">
      <ScrollButton />
      <div className="Title-Container">
        <h1 className="Title-About">about bam cat store</h1>
      </div>
      <div className="About-Container">
        <div className="Description-Container">
          <p className="Description-About"><span style={{ color: "#623BC1", fontSize: "20px", fontWeight: "bolder",textShadow: "1px 1px var(--color-accent-tint-grey-4)"}}>BAM CAT</span> is a company created by three web developers who like cats and clothes. We wanted to produce top-fashion and high-quality clothing to sell as a hobby in an online store that we developed. We enjoyed the experience of making this ecommerce website as it was so entertaining. We hope you find products you like in each click.</p>
          <img style={{ width: "150px" }} src={logo} alt=""></img>
        </div>
        <div className="Image-Container" >
          <img className="About-Image" src={fashionstore} alt=""></img>
        </div>
      </div>
    </div>
  )
}