import axios from 'axios';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './app/store';
import { AUTHENTICATED } from './app/types';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const token = localStorage.token;

	axios.defaults.baseURL = process.env.REACT_APP_BACKEND + '/api/v1/';
	axios.defaults.headers.post['Content-Type'] =
		'application/x-www-form-urlencoded';

	if (token) {
		store.dispatch({
			type: AUTHENTICATED,
			auth: true,
			loading: false,
			failed: false,
		});

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
