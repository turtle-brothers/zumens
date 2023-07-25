import { useCallback, useState } from 'react';
import axios from 'axios';
import { useMessage } from './useMessage';
import { Drawing, DrawingVersion } from '../types/api/drawing';

type UploadProps = {
  drawing: Partial<Drawing>;
  version: Partial<DrawingVersion>;
  isNewDrawing: boolean;
};

export const useUpload = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [drawings, setDrawings] = useState<Drawing[]>([]);

  const fetchDrawings = useCallback(() => {
    setLoading(true);
    axios
      .get('http://localhost:3001/drawings')
      .then((res) => {
        setDrawings(res.data);
        setLoading(false);
      })
      .catch(() => {
        showMessage({ title: '図面の取得に失敗しました', status: 'error' });
        setLoading(false);
      });
  }, [setDrawings, showMessage]);

  const upload = useCallback(
    (uploadProps: UploadProps) => {
      const { drawing, version, isNewDrawing } = uploadProps;

      console.log(uploadProps);
      console.log(uploadProps.version.drawing_id);

      setLoading(true);
      const formData = new FormData();

      // Set version data
      if (version.drawing_id) {
        formData.append('drawing_version[drawing_id]', `${version.drawing_id}`);
      }
      formData.append('drawing_version[description]', version.description || '');
      formData.append('drawing_version[version_number]', version.version_number || '');
      // formData.append('drawing_version[file_path]', version.file_path || '');
      if (version.file) {
        formData.append('drawing_version[file_path]', version.file);
      }

      // Set drawing data
      if (isNewDrawing) {
        formData.append('drawing[drawing_number]', drawing.drawing_number || '');
        formData.append('drawing[product_number]', drawing.product_number || '');
        formData.append('drawing[product_name]', drawing.product_name || '');
        formData.append('drawing[destination]', drawing.destination || '');
        formData.append('drawing[facility]', drawing.facility || '');
        formData.append('drawing[part_class]', drawing.part_class || '');
        formData.append('drawing[part_name]', drawing.part_name || '');
      }

      // Choose endpoint based on whether it's a new drawing or a new version of an existing drawing
      const endpoint = isNewDrawing ? 'http://localhost:3001/drawings' : 'http://localhost:3001/drawing_versions';

      axios
        .post(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'アップロードが完了しました', status: 'success' });
            setDrawings(prev => [...prev, res.data]);
          } else {
            for (const [key, value] of formData.entries()) {
              console.log(key, value);
            }
            showMessage({ title: 'アップロードに失敗しました', status: 'error' });
          }
          setLoading(false);
        })
        .catch(() => {
          for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
          showMessage({ title: 'アップロードに失敗しました', status: 'error' });
          setLoading(false);
        });
    },
    [setDrawings, showMessage]
  );

  return { upload, loading, drawings, fetchDrawings };
};
