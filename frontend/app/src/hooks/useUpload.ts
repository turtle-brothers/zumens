import { useCallback, useState } from 'react';
import axios from 'axios';
import { useMessage } from './useMessage';

export const useUpload = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const upload = useCallback(
    (
      drawingNumber: string,
      versionNumber: string,
      productNumber: string,
      productName: string,
      destination: string,
      facility: string,
      partClass: string,
      partName: string,
      file: File
    ) => {
      setLoading(true);

      const formData = new FormData();
      formData.append('drawingNumber', drawingNumber);
      formData.append('versionNumber', versionNumber);
      formData.append('productNumber', productNumber);
      formData.append('productName', productName);
      formData.append('destination', destination);
      formData.append('facility', facility);
      formData.append('partClass', partClass);
      formData.append('partName', partName);
      formData.append('file', file);

      axios
        .post('サーバーのアップロードAPIエンドポイント', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'アップロードが完了しました', status: 'success' });
          } else {
            showMessage({ title: 'アップロードに失敗しました', status: 'error' });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: 'アップロードに失敗しました', status: 'error' });
          setLoading(false);
        });
    },
    [showMessage]
  );

  return { upload, loading };
};
