import CartActionsTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  carItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch(type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        carItems: addItemToCart(state.carItems, action.payload),
      }
    default:
      return state;
  }
}

export default cartReducer;