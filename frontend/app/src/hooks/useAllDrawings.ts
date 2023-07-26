import axios from 'axios';
import { useCallback, useState } from 'react';

import { DrawingVersion } from '../types/api/drawing';
import { Drawing } from '../types/api/drawing';
import { useMessage } from './useMessage';

export const useAllDrawingVersions = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const [drawingVersions, setDrawingVersions] = useState<Array<DrawingVersion>>([]);

  const getDrawingVersions = useCallback(
    (sortOrder: string) => {
      setLoading(true);
      // axios
      //   .get<Array<DrawingVersion>>('http://localhost:3001/drawing_versions')
      //   .then((res) => {
      //     console.log(res.data);
      //     setDrawingVersions(res.data);
      //   })
      Promise.all([
        axios.get<Array<DrawingVersion>>('http://localhost:3001/drawing_versions', { params: { sort_order: sortOrder } }),
        axios.get<Array<Drawing>>('http://localhost:3001/drawings'),
      ])
        .then(([drawingVersionsResponse, drawingsResponse]) => {
          const drawings = drawingsResponse.data;
          // Merge DrawingVersions with their corresponding Drawings
          const mergedDrawingVersions = drawingVersionsResponse.data.map((version) => {
            const correspondingDrawing = drawings.find((drawing) => drawing.id === version.drawing_id);
            if (!correspondingDrawing) {
              throw new Error(`No matching drawing found for version with ID ${version.id}`);
            }
            return {
              ...version,
              drawing: correspondingDrawing,
            };
          });
          setDrawingVersions(mergedDrawingVersions);
        })
        .catch(() => {
          showMessage({ title: '図面の取得に失敗しました', status: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [showMessage]
  );

  return { getDrawingVersions, loading, drawingVersions };
};
