import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { UserManagement } from "../components/pages/UserManagement";
import { Upload } from "../components/pages/Upload";
import { PrivacyPolicy } from "../components/pages/PrivacyPolicy";
import { TermsOfUse } from "../components/pages/TermsOfUse";
import { Page404 } from "../components/pages/Page404";

import { HeaderLayout } from "../components/templates/HeaderLayout";
import { FooterLayout } from "../components/templates/FooterLayout";
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
              <FooterLayout>
                 <Home />
              </FooterLayout>
            </HeaderLayout>
          }
        />
        <Route
          path="/home/user_management"
          element={
            <HeaderLayout>
              <FooterLayout>
                <UserManagement />
              </FooterLayout>
            </HeaderLayout>
          }
        />
        <Route
          path="/home/upload"
          element={
            <HeaderLayout>
              <FooterLayout>
                <Upload />
              </FooterLayout>
            </HeaderLayout>
          }
        />
        <Route
          path="/home/privacy_policy"
          element={
            <HeaderLayout>
              <FooterLayout>
                <PrivacyPolicy />
              </FooterLayout>
            </HeaderLayout>
          }
        />
        <Route
          path="/home/terms_of_use"
          element={
            <HeaderLayout>
              <FooterLayout>
                <TermsOfUse />
              </FooterLayout>
            </HeaderLayout>
          }
        />
        <Route
          path="*"
          element={
            <HeaderLayout>
              <FooterLayout>
              <Page404 />
              </FooterLayout>
            </HeaderLayout>
          }
        />
      {/* </LoginUserProvider> */}
    </Routes>
  );
});
