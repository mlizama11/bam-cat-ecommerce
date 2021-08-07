import {
  CART_ADD_OR_SUBTRACT_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_CLEAR,
} from "../actions/CartAction";

const initialState = {
  data: [],
};

function CartReducer(state = initialState, action) {
  // function to check if the product is already exist in the state.data
  const productExist = (data, product) => {
    return data.find((cartItem) => cartItem.product.id === product.id);
  };

  switch (action.type) {
    case CART_ADD_OR_SUBTRACT_PRODUCT:
      // modify product quantity if exist
      if (productExist(state.data, action.payload.product)) {
        return {
          ...state,
          data: state.data.map((cartItem) => {
            // find product from state.data with matching id
            if (cartItem.product.id === action.payload.product.id) {
              cartItem.quantity += action.payload.quantity;

              // quantity in cart cant be lower than 0
              if (cartItem.quantity === 0) {
                cartItem.quantity = 1;
              }
            }
            return cartItem;
          }),
        };
      } else {
        // else just concat the product into data array
        // this is necessary because redux state immutability
        // with redux RTK we could just push it
        return {
          ...state,
          data: state.data.concat(action.payload),
        };
      }

    case CART_REMOVE_PRODUCT:
      // remove product if exist
      if (productExist(state.data, action.payload.product)) {
        return {
          ...state,
          data: state.data.filter(
            (cartItem) => cartItem.product.id !== action.payload.product.id
          ),
        };
      } else {
        // otherwise just do nothing
        return state;
      }

    case CART_CLEAR:
      return initialState;

    default:
      return state;
  }
}

export default CartReducer;
