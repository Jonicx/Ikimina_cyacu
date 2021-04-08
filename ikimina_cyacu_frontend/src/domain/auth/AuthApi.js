import axios from 'axios';

export const post = async (url, data) => {
	try {
		return await axios({
			method: 'post',
			cache: 'reload',
			mode: 'cors',
			url: '/auth/' + url,
			data: data,
		});
	} catch (error) {
		return error;
	}
};
