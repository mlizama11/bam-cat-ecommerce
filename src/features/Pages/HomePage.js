import React from "react";
import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/ProductAction";
import hero from "../img/hero.jpg";
import hero1 from "../img/hero1.jpg";
import hero2 from "../img/hero2.jpg";
import hero3 from "../img/hero3.jpg";
import men1 from "../img/men1.png";
import men2 from "../img/men2.jpg";
import men3 from "../img/men3.png";
import men4 from "../img/men4.jpg";
import women1 from "../img/women1.png";
import women2 from "../img/women2.jpg";
import women3 from "../img/women3.jpg";
import women4 from "../img/women4.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ScrollButton from "../Components/ScrollButton"
import {
  FaStar,
  FaDollarSign,
  FaTruckMoving,
  FaCheck,
  FaCcMastercard,
  FaCcPaypal,
  FaCreditCard,
  FaBackward,
  FaUserClock,
  FaRegCommentDots,
} from "react-icons/fa";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="Page-container">
      <ScrollButton />
      <div className="Carousel">
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero} alt="First slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button className="main-btn">
                <NavLink className="home-shop" exact={true} to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero1} alt="Second slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button className="main-btn">
                <NavLink className="home-shop" exact={true} to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero2} alt="Third slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button className="main-btn">
                <NavLink className="home-shop" exact={true} to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero3} alt="Third slide" />
            <Carousel.Caption>
              <h1>FASHION</h1>
              <h1>CHANGING</h1>
              <h1>ALWAYS</h1>
              <Button className="main-btn">
                <NavLink className="home-shop" exact={true} to="/shop">
                  SHOP NOW
                </NavLink>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Best-container">
        <div className="Men-title">
          <h2>Men's Most Popular</h2>
        </div>
        <div className="Best-men-clothing">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={men1} alt="First men product photo" />
              <Card.Body>
                <Card.Title>Men's Checked Pattern Shirt</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={men2} alt="Second men product photo" />
              <Card.Body>
                <Card.Title>Men's Slim Fit Trousers</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={men3} alt="Third men product photo"  />
              <Card.Body>
                <Card.Title>Men's Casual Jumper</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={men4} alt="Fourth men product photo" />
              <Card.Body>
                <Card.Title>Men's Denim Shirt Jacket</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div className="Women-title">
          <h2>Women's Most Popular</h2>
        </div>
        <div className="Best-women-clothing">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={women1} alt="First women product photo" />
              <Card.Body>
                <Card.Title>Women's Casual Top Shirt</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={women2} alt="Second women product photo" />
              <Card.Body>
                <Card.Title>Women's Jeans Trousers</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={women3} alt="Third women product photo" />
              <Card.Body>
                <Card.Title>Women's Office Shirt</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={women4} alt="Fourth women product photo" />
              <Card.Body>
                <Card.Title>Women's Black Trousers</Card.Title>
                <Card.Text>
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </Card.Text>
                <p className="full-price">
                  <FaDollarSign />
                  29
                  <span className="price-cents">99</span>
                </p>
              </Card.Body>
            </Card>
          </CardDeck>
          <div className="position-secondary-btn">
            <Button className="secondary-btn">
              <NavLink className="home-shop" exact={true} to="/shop">
                SHOP NOW
              </NavLink>
            </Button>
          </div>
        </div>
        <div className="General-info">
          <div className="Delivery">
            <div className="general-icons">
              <FaTruckMoving size={70} />
              <FaCheck size={40} />
            </div>
            <h3>Fast & Free Delivery</h3>
          </div>
          <div className="Payment">
            <div className="general-icons">
              <FaCcMastercard size={70} />
              <FaCcPaypal size={70} />
            </div>
            <h3>Select Your Preferred Method of Payment</h3>
          </div>
          <div className="Moneyback">
            <div className="general-icons">
              <FaBackward size={70} />
              <FaCreditCard size={70} />
            </div>
            <h3>Money Back Guarantee</h3>
          </div>
          <div className="Customer-Support">
            <div className="general-icons">
              <FaUserClock size={70} />
              <FaRegCommentDots size={70} />
            </div>
            <h3>Customer Support Always Available</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;