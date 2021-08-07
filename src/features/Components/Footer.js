import React from "react";
import "../styles/Footer.css";
import logo from "../img/logoW.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer-background">
      <div className="Footer">
        <div className="Links-wrapper">
          <div className="Logo-part">
            <img src={logo} alt=""></img>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, dignissimos cum!
            </p>
            <div className="Footer-icons">
              <Link
                to={{ pathname: "https://www.facebook.com/" }}
                target="_blank"
                className="icon facebook-icon"
              >
                <FaFacebook size={24}/>
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com/" }}
                target="_blank"
                className="icon instagram-icon"
              >
                <FaInstagramSquare size={24}/>
              </Link>
              <Link
                to={{ pathname: "https://www.youtube.com/" }}
                target="_blank"
                className="icon youtube-icon"
              >
                <FaYoutube size={24}/>
              </Link>
            </div>
          </div>
          <div className="Quick-links">
            <h4>Quick Links</h4>
            <Link
              to={{ pathname: "https://theuselessweb.com/" }}
              target="_blank"
            >
              Image Licensin
            </Link>
            <Link
              to={{ pathname: "https://theuselessweb.com/" }}
              target="_blank"
            >
              Style Guide
            </Link>
            <Link
              to={{ pathname: "https://theuselessweb.com/" }}
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="Partners-links">
            <h4>Partners Links</h4>
            <Link
              to={{ pathname: "https://en.zalando.de/?_rfl=de" }}
              target="_blank"
            >
              Zalando
            </Link>
            <Link
              to={{ pathname: "http://www.amazon.de" }}
              target="_blank"
            >
              Amazon
            </Link>
            <Link
              to={{ pathname: "https://www.ebay.de/" }}
              target="_blank"
            >
              E-bay
            </Link>
          </div>
          <div className="Contact-info">
            <h4>Get in touch</h4>
            <span>(09) 533 7732 20</span>
            <span>bam-cat@startup.com</span>
            <span>16/C Fugger Strasse, Potsdam, Germany</span>
          </div>
        </div>
        <div className="Credentials">
          <span> BAM E-Commerce | Copyright &copy; {year} </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;