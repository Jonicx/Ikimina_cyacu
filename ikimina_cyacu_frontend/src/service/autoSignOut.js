import { Redirect, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AutoSignOut = ({ history }) => {
  history.listen(() => {
    if (localStorage.getItem("token")) {
      const jwt_Token_decoded = jwt_decode(localStorage.getItem("token"));
      if (jwt_Token_decoded.exp * 1000 < Date.now()) {
        localStorage.clear();
      } else {
        <Redirect to="/" />;
      }
    }
  });
  return <div></div>;
};

export default withRouter(AutoSignOut);
