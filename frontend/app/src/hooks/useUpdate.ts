import axios from 'axios';
import { useCallback, useState } from 'react';

import { useMessage } from './useMessage';
import { Drawing, DrawingVersion } from '../types/api/drawing';

type UpdateProps = {
  drawing?: Partial<Drawing>;
  version?: Partial<DrawingVersion>;
};

export const useUpdate = (onSuccess: () => void) => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [drawings, setDrawings] = useState<Drawing[]>([]);

  const update = useCallback(
    async (updateProps: UpdateProps): Promise<any> => {
      const { drawing, version } = updateProps;

      setLoading(true);

      // DrawingとDrawingVersionを同時に更新。
      // Promise.allを使用し、それぞれの更新リクエストが成功したら、その結果を使って状態を更新。
      const requests: Promise<any>[] = [];

      //--------------------------------------------------------------------------
      //drawingのみUpdateする
      // if (drawing && (!version || !Object.keys(version).length)) {
      //   const formData = new FormData();

      //   // Drawingデータをセット
      //   formData.append('drawing[drawing_number]', drawing.drawing_number ?? '');
      //   formData.append('drawing[product_number]', drawing.product_number ?? '');
      //   formData.append('drawing[product_name]', drawing.product_name ?? '');
      //   formData.append('drawing[destination]', drawing.destination ?? '');
      //   formData.append('drawing[facility]', drawing.facility ?? '');
      //   formData.append('drawing[part_class]', drawing.part_class ?? '');
      //   formData.append('drawing[part_name]', drawing.part_name ?? '');

      //   // DrawingのUpdateエンドポイント
      //   const endpoint = `http://localhost:3001/drawings/${drawing.id}`;

      //   const request = axios.put(endpoint, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      //   requests.push(request);

      //   //log
      //   for (const pair of formData.entries()) {
      //     console.log(pair[0] + ', ' + pair[1]);
      //   }

      //   const formDataVersion = new FormData();

      //   console.log(version);
      //   formDataVersion.append('drawing_version[description]', version?.id ?? '');
      //   formDataVersion.append('drawing_version[version_number]', version?.version_number ?? '');

      //   //log
      //   for (const pair of formDataVersion.entries()) {
      //     console.log(pair[0] + ', ' + pair[1]);
      //   }

      //   // DrawingVersionのUpdateエンドポイント
      //   const versionEndpoint = `http://localhost:3001/drawing_versions/${version?.id}`;

      //   const requestVersion = axios.put(versionEndpoint, formDataVersion, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      //   requests.push(requestVersion);
      // }
      //--------------------------------------------------------------------------

      console.log('drawing:', drawing, 'version:', version);
      //drawingのみUpdateする
      if (drawing && Object.keys(drawing).length) {
        const formData = new FormData();
        // Drawingデータをセット
        formData.append('drawing[drawing_number]', drawing.drawing_number ?? '');
        formData.append('drawing[product_number]', drawing.product_number ?? '');
        formData.append('drawing[product_name]', drawing.product_name ?? '');
        formData.append('drawing[destination]', drawing.destination ?? '');
        formData.append('drawing[facility]', drawing.facility ?? '');
        formData.append('drawing[part_class]', drawing.part_class ?? '');
        formData.append('drawing[part_name]', drawing.part_name ?? '');

        // DrawingのUpdateエンドポイント
        const endpoint = `http://localhost:3001/drawings/${drawing.id}`;

        const request = axios.put(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        requests.push(request);

        //log
        for (const pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
      }
      //--------------------------------------------------------------------------
      if (version) {
        const formData = new FormData();

        // DrawingVersionデータをセット
        formData.append('drawing_version[description]', version.description ?? '');
        formData.append('drawing_version[version_number]', version.version_number ?? '');

        // DrawingVersionのUpdateエンドポイント
        const endpoint = `http://localhost:3001/drawing_versions/${version.id}`;

        const request = axios.put(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        requests.push(request);

        //log
        for (const pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
      }
      //--------------------------------------------------------------------------
      // versionオブジェクトがあり、drawingオブジェクトが空の場合、
      // versionからdrawing_idを取得してdrawingToUpdateオブジェクトを作成します。
      let drawingToUpdate = drawing;
      if ((!drawing || !Object.keys(drawing).length) && version) {
        drawingToUpdate = { id: version.drawing_id };
        // console.log('drawingToUpdate:', drawingToUpdate);

        const getDrawingResponse = await axios.get(`http://localhost:3001/drawings/${drawingToUpdate.id}`);
        const getDrawing = getDrawingResponse.data;

        const formData = new FormData();

        // Drawingデータをセット
        formData.append('drawing[drawing_number]', getDrawing.drawing_number ?? '');
        formData.append('drawing[product_number]', getDrawing.product_number ?? '');
        formData.append('drawing[product_name]', getDrawing.product_name ?? '');
        formData.append('drawing[destination]', getDrawing.destination ?? '');
        formData.append('drawing[facility]', getDrawing.facility ?? '');
        formData.append('drawing[part_class]', getDrawing.part_class ?? '');
        formData.append('drawing[part_name]', getDrawing.part_name ?? '');

        // DrawingのUpdateエンドポイント
        const endpoint = `http://localhost:3001/drawings/${drawingToUpdate.id}`;

        const request = axios.put(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        requests.push(request);

        //log
        for (const pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
      }
      //--------------------------------------------------------------------------
      Promise.all(requests)
        .then((responses) => {
          responses.forEach((res) => {
            if (res.data) {
              setDrawings((prev) => prev.map((d) => (d.id === res.data.id ? res.data : d)));
            }
          });
          showMessage({ title: '更新が完了しました', status: 'success' });
          onSuccess();
        })
        .catch((err) => {
          console.error(err);
          console.error(err.response.data);
          showMessage({ title: '更新に失敗しました', status: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setDrawings, showMessage, onSuccess]
    // [setDrawings, showMessage]
  );

  return { update, loading, drawings };
};
