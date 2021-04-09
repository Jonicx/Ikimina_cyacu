import axios from "axios";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./app/store";
import { AUTHENTICATED } from "./app/types";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const token = localStorage.token;

  axios.defaults.baseURL = "http://143.198.2.16:5555/";

  if (token) {
    store.dispatch({
      type: AUTHENTICATED,
      auth: true,
      loading: false,
      failed: false,
    });

    axios.defaults.headers = { token: token };
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
