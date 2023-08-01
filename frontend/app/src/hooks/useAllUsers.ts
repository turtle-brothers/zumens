import axios from 'axios';
import { useCallback, useState } from 'react';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>('http://localhost:3001/users')
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);

  return { getUsers, loading, users };
};
