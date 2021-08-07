import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions/ProductAction";

const initialState = {
  data: [],
  loading: false,
  hasErrors: false,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true, hasErrors: false };
    case GET_PRODUCTS_SUCCESS:
      return { data: action.payload, loading: false, hasErrors: false };
    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

export default productReducer;
