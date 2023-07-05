import data from '../data.json';
const initialState = data;

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle data-related actions if needed
    default:
      return state;
  }
};

export default dataReducer;
