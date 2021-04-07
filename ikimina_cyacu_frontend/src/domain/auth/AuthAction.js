import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import * as AuthApi from './AuthApi';
import { AUTHENTICATED, AUTHREGISTER } from './AuthType';

export const LoginAction = data => async dispatch => {
	dispatch({
		type: AUTHENTICATED,
		auth: false,
		loading: true,
		failed: false,
	});

	try {
		const response = await AuthApi.post('token', data);

		if (response.status === 200) {
			// authenticate user
			localStorage.setItem('token', response.data.access);
			localStorage.setItem('refresh', response.data.refresh);

			axios.defaults.headers.common['Authorization'] =
				'token ' + response.data.token;

			dispatch({
				type: AUTHENTICATED,
				auth: true,
				loading: false,
				failed: false,
			});
		} else {
			// dusplay error message
			dispatch({
				type: AUTHENTICATED,
				auth: false,
				loading: false,
				failed: true,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const RegisterAction = data => async disaptch => {
	disaptch({
		type: AUTHREGISTER,
		loading: true,
		failed: false,
		success: false,
	});

	try {
		const { status } = await AuthApi.post('register', data);

		if (status === 201) {
			// regiter successfully
			disaptch({
				type: AUTHREGISTER,
				loading: false,
				failed: false,
				success: true,
			});

			NotificationManager.success('Account created successfully !', '', 2500);
		} else {
			disaptch({
				type: AUTHREGISTER,
				loading: false,
				failed: true,
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const setUnauthorization = () => dispatch => {
	localStorage.removeItem('token');
	localStorage.removeItem('refresh');

	delete axios.defaults.headers.common['Authorization'];

	dispatch({
		type: AUTHENTICATED,
		auth: false,
		loading: false,
		failed: false,
	});
};
