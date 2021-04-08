import { include } from "named-urls";

const RoutesName = {
  home: "/",
  auth: include("/account", {
    login: "login",
  }),
  pages: include("/pages", {
    register: "Membership-registration",
    adminLog: "Admin-Log",
    members: "members",
  }),
};

export default RoutesName;
