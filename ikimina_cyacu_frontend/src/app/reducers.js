import { combineReducers } from 'redux';

import AuthReducer from '../domain/auth/AuthReducer';
import ProductReducer from '../domain/product/ProductReducer';

export default combineReducers({
	AuthReducer,
	ProductReducer,
});
