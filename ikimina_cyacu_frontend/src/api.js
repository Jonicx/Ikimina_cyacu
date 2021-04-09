let API_URL = "http://143.198.2.16:5555";

if (process.env.NODE_ENV === "production") {
  API_URL = "http://143.198.2.16:5555";
}

exports.API_URL = API_URL;
