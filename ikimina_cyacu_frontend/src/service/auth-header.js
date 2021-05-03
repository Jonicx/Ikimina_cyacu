import jwt_decode from "jwt-decode";

const authHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return true;
  }
  if (jwt_decode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    return true;
  }
  return false;
};

export default authHeader;
