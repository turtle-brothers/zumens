import React from 'react';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

import { User } from '../types/api/user';

type LoginUser = User & { isAdmin: boolean };

type LoginUserContextType = {
  LoginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

// ログインユーザー情報を保持するcontext
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [LoginUser, setLoginUser] = useState<LoginUser | null>(null);

  return <LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
};

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
