import { Home } from "../componets/pages/Home";
import { Setting } from "../componets/pages/Setting";
import { UserManagement } from "../componets/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  }
];
