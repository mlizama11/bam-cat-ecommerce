import React from "react";
import FormPage from "../Components/ContactUsForm";
import ScrollButton from "../Components/ScrollButton"

import "../styles/ContactUsForm.css";

export default function Contact() {
  return (
    <div>
      <ScrollButton />
      <FormPage />
    </div>
  );
}