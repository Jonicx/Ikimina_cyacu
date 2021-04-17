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
      firstName: firstName.toUpperCase(),
      lastName: lastName,
      parentMemberId: parentMemberId,
      phoneNumber: phoneNumber,
    });
    const config = {
      method: "post",
      url: API_URL + "/member/add",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };
    return axios(config);
  }

  searchMember(queryStr) {
    var data = JSON.stringify({
      query: queryStr,
    });

    var config = {
      method: "post",
      url: API_URL + "/member/search",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config);
  }

  getMemberById(id) {
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "post",
      url: API_URL + "/member/get",
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
