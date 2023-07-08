import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../componets/pages/Login";
import { Home } from "../componets/pages/Home";
import { UserManagement } from "../componets/pages/UserManagement";
import { Page404 } from "../componets/pages/Page404";
import { HeaderLayout } from "../componets/templates/HeaderLayout";
// import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <Routes>
      {/* <LoginUserProvider> */}
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          }
        />
        <Route
          path="/home/user_management"
          element={
            <HeaderLayout>
              <UserManagement />
            </HeaderLayout>
          }
        />
        <Route
          path="*"
          element={
            <HeaderLayout>
              <Page404 />
            </HeaderLayout>
          }
        />
      {/* </LoginUserProvider> */}
    </Routes>
  );
});
