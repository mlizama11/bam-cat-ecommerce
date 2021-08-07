import logo from "../img/logo.svg";
import {
  FaChevronLeft,
  FaCaretLeft,
  FaCaretRight,
  FaShoppingBag,
  FaDollarSign,
} from "react-icons/fa";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { cartAddOrSubtractProduct } from "../../actions/CartAction";

function ProductModal(props) {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(cartAddOrSubtractProduct(props.product, quantity));
      handleClose();
    }
  };

  const handleClose = () => {
    props.onProductUnselected();
    setQuantity(0);
    setTotalPrice(0);
  };

  const handleIncrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateTotalPrice(newQuantity);
  };
  const handleDecrementQuantity = () => {
    const newQuantity = quantity - 1;
    if (quantity > 0) {
      setQuantity(newQuantity);
      updateTotalPrice(newQuantity);
    }
  };

  const updateTotalPrice = (totalQuantity) => {
    setTotalPrice(Number(totalQuantity * props.product.price).toFixed(2));
  };

  return (
    <div
      className="lightbox-blanket"
      style={{ display: props.product.id ? "block" : "none" }}
    >
      <div className="pop-up-container">
        <div className="pop-up-container-vertical">
          <div className="pop-up-wrapper">
            <div className="go-back" onClick={handleClose}>
              <i className="FaChevronLeft go-back-icon ">
                <FaChevronLeft size={28} />
              </i>
            </div>
            <div className="product-details">
              <div className="product-left">
                <div className="product-info">
                  <div className="product-manufacturer">
                    <img alt="logo" width="80px" src={logo} />
                  </div>
                  <div className="product-title">{props.product.title}</div>
                  <div className="product-price">
                    <FaDollarSign className="curency-prise" size={20} />
                    {props.product.price
                      ? props.product.price.toString().split(".")[0]
                      : 0}
                    <span className="product-price-cents">
                      {props.product.price
                        ? props.product.price.toString().split(".")[1]
                        : 0}
                    </span>
                  </div>
                </div>
                <div className="product-image">
                  <img alt="product-img" src={props.product.image} />
                </div>
              </div>
              <div className="product-right">
                <div className="product-description">
                  {props.product.description}
                </div>
                <div className="product-available">
                  In stock.{" "}
                  <span className="product-extended">
                    <a className="warranty-link" href="#0">
                      Buy Extended Warranty
                    </a>
                  </span>
                </div>
              </div>
              <div className="product-quantity">
                <label
                  htmlFor="product-quantity-input"
                  className="product-quantity-label"
                >
                  Quantity
                </label>
                <div className="container-quantity">
                  <div className="product-quantity-subtract">
                    <i
                      className="FaCaretLeft quantity-left-btn"
                      onClick={handleDecrementQuantity}
                    >
                      <FaCaretLeft size={28} />
                    </i>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="product-quantity-input"
                      onChange={() => { }}
                      value={quantity}
                    />
                  </div>
                  <div className="product-quantity-add">
                    <i
                      className="FaCaretRight quantity-right-btn"
                      onClick={handleIncrementQuantity}
                    >
                      <FaCaretRight size={28} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bottom">
              <div className="product-checkout">
                Total Price
                <div className="product-checkout-total">
                  <i className="FaDollarSign currency-total-icon">
                    <FaDollarSign size={20} />
                  </i>
                  <div className="product-checkout-total-amount">
                    {totalPrice}
                  </div>
                </div>
              </div>
              <div className="product-checkout-actions">
                <a
                  className="add-to-cart modal-link"
                  href="#0"
                  onClick={() => handleAddToCart()}
                >
                  <FaShoppingBag className="cart-icon" size={30} /> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;