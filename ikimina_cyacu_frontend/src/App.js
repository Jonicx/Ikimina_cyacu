import axios from "axios";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const token = localStorage.token;

  axios.defaults.baseURL = "http://143.198.2.16:5555/";

  if (token) {
    axios.defaults.headers = { token: token };
  }

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
