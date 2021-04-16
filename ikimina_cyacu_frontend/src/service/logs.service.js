import axios from "axios";
const API_URL = require("../api").API_URL;

class LogService {
  getAllLogs() {
    const config = {
      method: "get",
      url: API_URL + "/logs/get",
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    return axios(config);
  }
}

export default new LogService();
