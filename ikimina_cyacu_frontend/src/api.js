let API_URL = "http://127.0.0.1:5000";

if (process.env.NODE_ENV === "production") {
  API_URL = "http://143.198.2.16:5555";
}

exports.API_URL = API_URL;
