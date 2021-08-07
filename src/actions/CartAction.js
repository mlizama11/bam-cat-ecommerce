export const CART_ADD_OR_SUBTRACT_PRODUCT = "CART_ADD_OR_SUBTRACT_PRODUCT";
export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";
export const CART_CLEAR = "CART_CLEAR";

export const cartAddOrSubtractProduct = (product, quantity) => {
  return {
    type: CART_ADD_OR_SUBTRACT_PRODUCT,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};

export const cartRemoveProduct = (product) => {
  return {
    type: CART_REMOVE_PRODUCT,
    payload: {
      product: product,
    },
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};
