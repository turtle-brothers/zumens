import { useCallback, useState } from 'react';

import { DrawingVersion } from '../types/api/drawing';

type Props = {
  id: number;
  drawingVersions: DrawingVersion[];
  onOpen: () => void;
};

//選択したユーザー情報を特定し、モーダルを表示するカスタムフック
export const useSelectDrawing = () => {
  const [selectedDrawing, setSelectedDrawing] = useState<DrawingVersion | null>(null);

  const onSlectDrawing = useCallback((props: Props) => {
    const { id, drawingVersions, onOpen } = props;
    const targetDrawing = drawingVersions.find((drawingVersion) => drawingVersion.drawing.id === id);
    setSelectedDrawing(targetDrawing ?? null);
    onOpen();
  }, []);

  return { onSlectDrawing, selectedDrawing };
};
