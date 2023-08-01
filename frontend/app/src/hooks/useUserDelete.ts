import { useCallback, useState } from 'react';
import axios from 'axios';
import { useMessage } from './useMessage';

export const useUserDelete = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const deleteItem = useCallback(
    (id: number) => {
      setLoading(true);

      // Promiseを返すようにします
      return axios
        .delete(`http://localhost:3001/users/${id}`)
        .then((res) => {
          if (res.status === 204) {
            // ステータスコードが204ならば削除成功
            showMessage({ title: '削除が完了しました', status: 'success' });
          } else {
            // console.error();
            showMessage({ title: '削除に失敗しました', status: 'error' });
          }
        })
        .catch(() => {
          showMessage({ title: '削除に失敗しました', status: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [showMessage]
  );

  return { deleteItem, loading };
};
