import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard";
import CardSkeleton from "../Components/CardSkeleton";
import ProductModal from "../Components/ProductModal";
import { fetchProducts } from "../../actions/ProductAction";
import "../styles/Shop.css";
import * as categoryTypes from "../../types/Category";
import "../styles/Product.css";
import ScrollButton from "../Components/ScrollButton";
import { cartAddOrSubtractProduct } from "../../actions/CartAction";

function Shop() {
  // Here we got two variables, one for loading and another for errors using useSelector from react-redux
  const loading = useSelector((state) => state.products.loading);
  const hasErrors = useSelector((state) => state.products.hasErrors);

  // Here we fetch the data from the API
  const data = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  // By default we fetch filtering by category the women clothes by default using useDispatch from react-redux. This is important for the filter functionality by category in buttons.
  useEffect(() => {
    dispatch(fetchProducts(categoryTypes.WOMENS_CLOTHING));
  }, [dispatch]);

  // Variables to manage the products in the Page with useState
  const initialState = {};
  const [selectedProduct, setSelectedProduct] = useState(initialState);

  // useState for handling filter
  const [selectedFilter, setSelectedFilter] = useState(
    categoryTypes.WOMENS_CLOTHING
  );

  // triggers the Modal option in details button
  const handleProductSelected = (product) => {
    setSelectedProduct(product);
  };

  const handleProductUnselected = () => {
    setSelectedProduct(initialState);
  };

  // handle to add to Cart component to dispatch the product to store
  const handleAddToCart = (product) => {
    dispatch(cartAddOrSubtractProduct(product, 1));
  };

  // We use Skeleton while loading as an effect, if there is a problem it will show error message
  const renderProductCards = () => {
    if (loading)
      return (
        <div className="Cards-Container">
          {Array(9)
            .fill()
            .map((item, id) => (
              <CardSkeleton
                key={id}
              />
            ))}
        </div>
      );
    if (hasErrors) return <p>Unable to display product.</p>;
    return (
      <div className="Cards-Container">
        {data.map((item, id) => (
          <ProductCard
            key={id}
            product={item}
            itemIndex={id}
            onAddToCart={handleAddToCart}
            onProductSelected={handleProductSelected}
          />
        ))}
      </div>
    );
  };

  // After the loading and error check, we will get the success state in RENDER that is the Cards with the products. Buttons with different functions onClick
  const renderProducts = () => {
    return (
      <div className="Container">
        <ScrollButton />
        <div className="Title-Container">
          <h1 className="Title-Shop">our products</h1>
        </div>
        <ProductModal
          product={selectedProduct}
          onProductUnselected={handleProductUnselected}
        />
        <div className="Categories-Products-Container">
          <div className="Categories">
            <div className="Title-Category-Container">
              <h3 className="Title-Category">Filter by Categories</h3>
            </div>
            <div className="Button-Container">
              <button id="Shop-Button" className={
                selectedFilter === categoryTypes.WOMENS_CLOTHING
                  ? "filter-selected "
                  : null
              }
                onClick={() => {
                  setSelectedFilter(categoryTypes.WOMENS_CLOTHING);
                  dispatch(fetchProducts(categoryTypes.WOMENS_CLOTHING));
                }}
              >
                Women Clothing
              </button>
              <button id="Shop-Button" className={
                selectedFilter === categoryTypes.MENS_CLOTHING
                  ? "filter-selected"
                  : null
              }
                onClick={() => {
                  setSelectedFilter(categoryTypes.MENS_CLOTHING);
                  dispatch(fetchProducts(categoryTypes.MENS_CLOTHING));
                }}
              >
                Men Clothing
              </button>
            </div>
          </div>
          {renderProductCards()}
        </div>
      </div>
    );
  };

  return renderProducts();
}

export default Shop;