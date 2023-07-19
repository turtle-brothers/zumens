import axios from 'axios';
import { useCallback, useState } from 'react';

import { DrawingVersion } from '../types/api/drawing';
import { useMessage } from './useMessage';

export const useAllDrawingVersions = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const [drawingVersions, setDrawingVersions] = useState<Array<DrawingVersion>>([]);

  const getDrawingVersions = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<DrawingVersion>>('http://localhost:3001/drawing_versions')
      .then((res) => setDrawingVersions(res.data))
      .catch(() => {
        showMessage({ title: '図面の取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);

  return { getDrawingVersions, loading, drawingVersions };
};
