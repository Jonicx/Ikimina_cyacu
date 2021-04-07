import AuthInitialState from './AuthInitialState';
import { AUTHENTICATED, AUTHREGISTER } from './AuthType';

const AuthReducer = (state = AuthInitialState, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return {
				...state,
				authenticated: action.auth,
				loading: action.loading,
				failed: action.failed,
			};

		case AUTHREGISTER:
			return {
				...state,
				registerFailed: action.failed,
				registerLoading: action.loading,
				registerSucceeded: action.success,
			};

		default:
			return state;
	}
};

export default AuthReducer;
