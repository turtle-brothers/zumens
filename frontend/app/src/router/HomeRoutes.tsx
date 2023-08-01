import React from 'react';

import { Home } from '../components/pages/Home';
import { UserManagement } from '../components/pages/UserManagement';
import { Upload } from '../components/pages/Upload';
import { UserUpload } from '../components/pages/UserUpload';
import { PrivacyPolicy } from '../components/pages/PrivacyPolicy';
import { TermsOfUse } from '../components/pages/TermsOfUse';
import { SignUp } from '../components/pages/Signup';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/user_management_upload',
    exact: false,
    children: <UserUpload />,
  },
  {
    path: '/upload',
    exact: false,
    children: <Upload />,
  },
  {
    path: '/privacy_policy',
    exact: false,
    children: <PrivacyPolicy />,
  },
  {
    path: '/terms_of_use',
    exact: false,
    children: <TermsOfUse />,
  },
  {
    path: '/signup',
    exact: false,
    children: <SignUp />,
  },
];
