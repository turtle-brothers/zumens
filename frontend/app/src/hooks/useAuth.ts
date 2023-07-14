import { useCallback, useState } from 'react';
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

  // ログイン処理
  const login = useCallback(
    (id: string, password: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(async (res) => {
          if (res.data) {
            // contextにログインユーザーの情報を保存
            // サンプル的にidが10のユーザーを管理者としてみる
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
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
