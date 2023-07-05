import { createStore, combineReducers } from 'redux';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
