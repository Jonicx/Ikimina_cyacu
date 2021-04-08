import axios from 'axios';
import RoutesName from '../../app/config/routes';
import { reverse } from 'named-urls';
import { NotificationManager } from 'react-notifications';
import {
	CATEGORYPRODUCT,
	FEATUREDPRODUCT,
	LISTPRODUCT,
	VIEWPRODUCT,
	CARTPRODUCT,
	ORDERPRODUCT,
} from './ProductType';
import * as ProductApi from './ProductApi';

export const categoryProductAction = () => async dispatch => {
	dispatch({
		type: CATEGORYPRODUCT,
		payload: [],
		loading: true,
	});

	try {
		const { data } = await ProductApi.get('category');

		dispatch({
			type: CATEGORYPRODUCT,
			payload: data,
			loading: false,
		});
	} catch (error) {
		console.log(error);
	}
};

export const featuredProductAction = () => async dispatch => {
	dispatch({
		type: FEATUREDPRODUCT,
		payload: [],
		loading: true,
	});

	try {
		const { data } = await ProductApi.get('featured');

		dispatch({
			type: FEATUREDPRODUCT,
			payload: data,
			loading: false,
		});
	} catch (error) {
		console.log(error);
	}
};

export const listProductAction = (
	category,
	price,
	search
) => async dispatch => {
	dispatch({
		type: LISTPRODUCT,
		payload: [],
		loading: true,
	});

	try {
		if (category || price || search) {
			const { data } = await ProductApi.get(
				'list?category=' + category + '&price=' + price + '&search=' + search
			);

			dispatch({
				type: LISTPRODUCT,
				payload: data,
				loading: false,
			});
		} else {
			const { data } = await ProductApi.get('list');

			dispatch({
				type: LISTPRODUCT,
				payload: data,
				loading: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const viewProductAction = slug => async dispatch => {
	dispatch({
		type: VIEWPRODUCT,
		payload: {},
		loading: true,
	});

	try {
		const { status, data } = await ProductApi.get('view/' + slug);

		if (status === 202) {
			dispatch({
				type: VIEWPRODUCT,
				payload: data,
				loading: false,
			});
		} else {
			dispatch({
				type: VIEWPRODUCT,
				payload: {},
				loading: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const addToCartProductAction = (obj, data) => dispatch => {
	let filteredData = [...data];
	const itemID = obj.id;

	const findProductIndex = data.findIndex(product => product.id === itemID);

	if (findProductIndex > -1) {
		filteredData[findProductIndex] = {
			...filteredData[findProductIndex],
			cart: obj.cart,
		};
	} else {
		filteredData.push(obj);
	}

	dispatch({
		type: CARTPRODUCT,
		payload: filteredData,
	});

	NotificationManager.success('item added to cart successfully !', '', 5000);
};

export const countCartProductAction = (id, count, data) => dispatch => {
	let filteredData = [...data];

	const findProductIndex = data.findIndex(product => product.id === id);

	filteredData[findProductIndex] = {
		...filteredData[findProductIndex],
		cart: count,
	};

	dispatch({
		type: CARTPRODUCT,
		payload: filteredData,
	});
};

export const removeFromCartProductAction = (id, data) => dispatch => {
	var filteredData = [];

	data
		.filter(product => product.id !== id)
		.map(product => filteredData.push(product));

	dispatch({
		type: CARTPRODUCT,
		payload: filteredData,
	});

	NotificationManager.success(
		'item removed from cart successfully !',
		'',
		5000
	);
};

export const emptyCartProductAction = () => dispatch => {
	dispatch({
		type: CARTPRODUCT,
		payload: [],
	});

	NotificationManager.success('cart emptyed successfully !', '', 5000);
};

export const getOrderProductAction = () => async dispatch => {
	dispatch({
		type: ORDERPRODUCT,
		loading: true,
	});

	const refreshToken = localStorage.getItem('refresh');

	if (refreshToken) {
		const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

		// exp date in token is expressed in seconds, while now() returns milliseconds:
		const now = Math.ceil(Date.now() / 1000);

		// console.log(tokenParts.exp);

		if (tokenParts.exp > now) {
			const accessResponse = await axios.post('auth/token/refresh', {
				refresh: refreshToken,
			});

			axios.defaults.headers.common['Authorization'] =
				'Bearer ' + accessResponse.data.access;
		} else {
			window.location.href = reverse(RoutesName.auth.login);
		}
	} else {
		window.location.href = reverse(RoutesName.auth.login);
	}

	try {
		const { data } = await ProductApi.get('order');

		dispatch({
			type: ORDERPRODUCT,
			loading: false,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const saveOrderProductAction = dataBody => async dispatch => {
	const refreshToken = localStorage.getItem('refresh');

	if (refreshToken) {
		const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

		// exp date in token is expressed in seconds, while now() returns milliseconds:
		const now = Math.ceil(Date.now() / 1000);

		// console.log(tokenParts.exp);

		if (tokenParts.exp > now) {
			const accessResponse = await axios.post('auth/token/refresh', {
				refresh: refreshToken,
			});

			axios.defaults.headers.common['Authorization'] =
				'Bearer ' + accessResponse.data.access;
		} else {
			window.location.href = reverse(RoutesName.auth.login);
		}
	} else {
		window.location.href = reverse(RoutesName.auth.login);
	}

	try {
		await ProductApi.post('order/save', dataBody);

		setTimeout(() => {
			window.location.href = reverse(RoutesName.auth.order);
		}, 5000);
	} catch (error) {
		console.log(error);
	}
};
