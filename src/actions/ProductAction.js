import axios from "axios";

import { baseUrl } from "../env";
import * as categoryTypes from "../types/Category";

// We have three actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

// we have an action creator to get all the products from API
export const getProducts = () => ({
  type: GET_PRODUCTS,
});

// When success we have this function with type and payload
export const getProductsSuccess = (PRODUCTS) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: PRODUCTS,
});

// When failure we have this function to catch errors
export const getProductsFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

// Asynchronous thunk, combining action as one business logic, we use Axios to get the data unfiltered and later we created a filter for the Shop with IF ELSE statements
export const fetchProducts = (category) => async (dispatch) => {
  dispatch(getProducts());

  try {
    const response = await axios.get(baseUrl + "/products");
    const unfilteredData = response.data;

    let filteredData = [];

    if (category) {
      filteredData = unfilteredData.filter((p) => p.category === category);
    } else {
      filteredData = unfilteredData.filter(
        (p) =>
          p.category === categoryTypes.WOMENS_CLOTHING ||
          p.category === categoryTypes.MENS_CLOTHING
      );
    }

    dispatch(getProductsSuccess(filteredData));
  } catch (err) {
    console.log(err);
    dispatch(getProductsFailure());
  }
};
