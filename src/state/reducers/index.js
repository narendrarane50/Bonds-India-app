import isCartOpenReducer from './isCartOpen';
import productsReducer from './products';
import productReducer from './product';
import cartReducer from './cart';
import filterReducer from './filter';
import loadingStatesReducer from './loadingStates';
import registrationReducer from './register';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer,
  loadingState: loadingStatesReducer,
  filter: filterReducer,
  product: productReducer,
  registration: registrationReducer,
});

export default rootReducer;
