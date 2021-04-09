import axios from "axios";

const API_URL = "http://143.198.2.16:5555";

class AuthService {
  login(username, password, ip) {
    return axios
      .post(API_URL + "/auth/admin/login", {
        username,
        password,
        ip,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("token"));
  }
}

export default new AuthService();
