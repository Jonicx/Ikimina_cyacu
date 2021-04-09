import axios from "axios";
const API_URL = require("../api").API_URL;

class MemberService {
  getAllMembers() {
    const config = {
      method: "get",
      url: API_URL + "/member/get",
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    return axios(config);
  }

  register(firstName, lastName, parentMemberId, phoneNumber) {
    let data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      parentMemberId: parentMemberId,
      phoneNumber: phoneNumber,
    });
    const config = {
      method: "add",
      url: API_URL + "/member/add",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };
    return axios(config);
  }
}

export default new MemberService();
