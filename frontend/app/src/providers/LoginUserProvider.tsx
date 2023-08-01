import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import axios from 'axios';
import { User } from '../types/api/user';

type LoginUser = User & { isAdmin: boolean };

type LoginUserContextType = {
  LoginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
  fetchLoginUser: () => Promise<void>; // ログインユーザー情報を取得するための関数を追加します
};

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

// ログインユーザー情報を保持するcontext
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [LoginUser, setLoginUser] = useState<LoginUser | null>(null);

  // ログインユーザー情報を取得する関数を定義します
  const fetchLoginUser = async () => {
    const userId = window.sessionStorage.getItem('userId'); // セッションストレージからユーザーIDを取得
    console.log(userId);
    if (userId) {
      try {
        const res = await axios.get(`http://localhost:3001/users/${userId}`);
        if (res.data) {
          console.log('Login User Data from Server: ', res.data);
          // contextにログインユーザーの情報を保存
          // ここではサーバから返されたデータを元にisAdminを判定します
          const isAdmin = res.data.role === 'Admin' ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          console.log('User Data after setLoginUser: ', { ...res.data, isAdmin }); // setLoginUser呼び出し後のデータを表示
        }
      } catch (error) {
        console.error('Failed to fetch the user data: ', error);
      }
    }
  };
  return <LoginUserContext.Provider value={{ LoginUser, setLoginUser, fetchLoginUser }}>{children}</LoginUserContext.Provider>;
};

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
