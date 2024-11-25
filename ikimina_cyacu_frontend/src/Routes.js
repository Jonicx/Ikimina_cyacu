import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomRoute from "./app/utils/route";
import RoutesName from "./app/routes";
import { HomeView } from "./frontface/pages/client/Home/main";
import { RegistrationView } from "./frontface/pages/client/Register";
import { AdminLogView } from "./frontface/pages/client/AdminLog/";
import { TreeView } from "./frontface/pages/client/Tree/";
import { LoginView } from "./frontface/pages/client/auth/";

import AutoSignOut from "./service/autoSignOut";

const Routes = () => {
  return (
    <BrowserRouter>
      <AutoSignOut />

      <Switch>
        <Route
          path={RoutesName.auth.login}
          component={LoginView}
          auth={false}
          access={false}
        />
        <CustomRoute
          path={RoutesName.pages.adminLog}
          component={AdminLogView}
          auth={true}
          access={true}
        />
        <Route
          path={RoutesName.pages.register}
          component={RegistrationView}
          auth={true}
          access={true}
        />
        <CustomRoute
          path={RoutesName.pages.members}
          component={TreeView}
          auth={false}
          access={true}
        />
        <CustomRoute
          path={RoutesName.home}
          component={HomeView}
          auth={true}
          access={true}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
