import axios from 'axios';

export const get = async url => {
	try {
		return await axios({
			method: 'get',
			cache: 'reload',
			mode: 'cors',
			url: 'product/' + url,
		});
	} catch (error) {
		return error;
	}
};

export const post = async (url, data) => {
	try {
		return await axios({
			method: 'post',
			cache: 'reload',
			mode: 'cors',
			url: 'product/' + url,
			data: data,
		});
	} catch (error) {
		return error;
	}
};
