const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemInCart = state.find((item) => item.id === action.payload.id);
      const department = state.find(
        (item) => item.domain === action.payload.domain
      );
      if (itemInCart || department) {
        return state;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

export default cartReducer;
