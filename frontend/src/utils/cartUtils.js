// utils/cartUtils.js

export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Initialize to 0 if not already set
  state.itemsPrice = state.itemsPrice || 0;
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Initialize to 0 if not already set
  state.shippingPrice = state.shippingPrice || 0;
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Initialize to 0 if not already set
  state.taxPrice = state.taxPrice || 0;
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // Calculate the total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Store the updated cart in local storage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};



/*export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

  // Calculate the shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate the tax price
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // Calculate the total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Store the updated cart in local storage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};*/
