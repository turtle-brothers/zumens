import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from '../providers/LoginUserProvider';

export const useAuth = () => {
  const navigate = useNavigate();

  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('LoginUser updated: ', useLoginUser);
  }, [useLoginUser]);

  // ログイン処理
  const login = useCallback(
    (id: string, password: string) => {
      setLoading(true);
      axios
        .post<User>(`http://localhost:3001/users/sign_in`, { user: { username: id, password: password } })
        .then(async (res) => {
          if (res.data) {
            // contextにログインユーザーの情報を保存
            // ここではサーバから返されたデータを元にisAdminを判定します
            console.log('Login User Data from Server: ', res.data);
            window.sessionStorage.setItem('userId', res.data.id.toString());
            const isAdmin = res.data.role === 'Admin' ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            console.log('User Data after setLoginUser: ', { ...res.data, isAdmin }); // setLoginUser呼び出し後のデータを表示
            showMessage({ title: 'ログインしました', status: 'success' });
            navigate('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
