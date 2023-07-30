import React, { ChangeEvent, memo, useEffect, useState, FC } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';

import { DrawingVersion, Drawing } from '../../../types/api/drawing';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useAllDrawingVersions } from '../../../hooks/useAllDrawings';
import { useUpdate } from '../../../hooks/useUpdate';
//import { useNavigate } from 'react-router-dom';

type Props = {
  drawingVersion: DrawingVersion | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
  onDelete: (id: number | undefined) => void;
};

export const DrawingDetailModal: FC<Props> = memo((props) => {
  const { drawingVersion, isOpen, onClose, isAdmin = false, onDelete } = props;

  //const navigate = useNavigate();

  const { getDrawingVersions } = useAllDrawingVersions();
  const { update } = useUpdate(() => getDrawingVersions('desc'));
  // const { update } = useUpdate();

  const onClickDelete = () => {
    if (drawingVersion) {
      onDelete(drawingVersion.id);
    }
  };

  const [drawing_number, setDrawingNumber] = useState('');
  const [product_number, setProductNumber] = useState('');
  const [product_name, setProductName] = useState('');
  const [destination, setDestination] = useState('');
  const [facility, setFacility] = useState('');
  const [part_class, setPartClass] = useState('');
  const [part_name, setPartName] = useState('');
  const [description, setDescription] = useState('');
  const [version_number, setVersionNumber] = useState('');

  useEffect(() => {
    setDrawingNumber(drawingVersion?.drawing.drawing_number ?? '');
    setProductNumber(drawingVersion?.drawing.product_number ?? '');
    setProductName(drawingVersion?.drawing.product_name ?? '');
    setDestination(drawingVersion?.drawing.destination ?? '');
    setFacility(drawingVersion?.drawing.facility ?? '');
    setPartClass(drawingVersion?.drawing.part_class ?? '');
    setPartName(drawingVersion?.drawing.part_name ?? '');
    setDescription(drawingVersion?.description ?? '');
    setVersionNumber(drawingVersion?.version_number ?? '');
  }, [drawingVersion]);

  // 初期値を保存するための新しい状態変数を追加
  const [initialDrawingNumber, setInitialDrawingNumber] = useState('');
  const [initialProductNumber, setInitialProductNumber] = useState('');
  const [initialProductName, setInitialProductName] = useState('');
  const [initialDestination, setInitialDestination] = useState('');
  const [initialFacility, setInitialFacility] = useState('');
  const [initialPartClass, setInitialPartClass] = useState('');
  const [initialPartName, setInitialPartName] = useState('');
  const [initialDescription, setInitialDescription] = useState('');
  const [initialVersionNumber, setInitialVersionNumber] = useState('');

  // 更新が必要かどうかを追跡するための新しい状態変数を追加
  const [isDrawingUpdateNeeded, setDrawingUpdateNeeded] = useState(false);
  const [isDrawingVersionUpdateNeeded, setDrawingVersionUpdateNeeded] = useState(false);

  useEffect(() => {
    setInitialDrawingNumber(drawingVersion?.drawing.drawing_number ?? '');
    setInitialProductNumber(drawingVersion?.drawing.product_number ?? '');
    setInitialProductName(drawingVersion?.drawing.product_name ?? '');
    setInitialDestination(drawingVersion?.drawing.destination ?? '');
    setInitialFacility(drawingVersion?.drawing.facility ?? '');
    setInitialPartClass(drawingVersion?.drawing.part_class ?? '');
    setInitialPartName(drawingVersion?.drawing.part_name ?? '');
    setInitialDescription(drawingVersion?.description ?? '');
    setInitialVersionNumber(drawingVersion?.version_number ?? '');
  }, [drawingVersion]);

  //フィールド毎に初期値を保存し、値が変更されたかどうか確認
  const onChangeDrawingNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const newDrawingNumber = event.target.value;
    setDrawingNumber(newDrawingNumber);
    if (initialProductNumber !== newDrawingNumber) {
      setDrawingUpdateNeeded(true); // Drawingの更新が必要であることを示すフラグを立てる
    }
  };
  const onChangeProductNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const newProductNumber = event.target.value;
    setProductNumber(newProductNumber);
    if (initialDrawingNumber !== newProductNumber) {
      setDrawingUpdateNeeded(true);
    }
  };

  const onChangeProductName = (event: ChangeEvent<HTMLInputElement>) => {
    const newProductName = event.target.value;
    setProductName(newProductName);
    if (initialProductName !== newProductName) {
      setDrawingUpdateNeeded(true);
    }
  };

  const onChangeDestination = (event: ChangeEvent<HTMLInputElement>) => {
    const newDestination = event.target.value;
    setDestination(newDestination);
    if (initialDestination !== newDestination) {
      setDrawingUpdateNeeded(true);
    }
  };

  const onChangeFacility = (event: ChangeEvent<HTMLInputElement>) => {
    const newFacility = event.target.value;
    setFacility(newFacility);
    if (initialFacility !== newFacility) {
      setDrawingUpdateNeeded(true);
    }
  };
  const onChangePartClass = (event: ChangeEvent<HTMLInputElement>) => {
    const newPartClass = event.target.value;
    setPartClass(newPartClass);
    if (initialPartClass !== newPartClass) {
      setDrawingUpdateNeeded(true);
    }
  };
  const onChangePartName = (event: ChangeEvent<HTMLInputElement>) => {
    const newPartName = event.target.value;
    setPartName(newPartName);
    if (initialPartName !== newPartName) {
      setDrawingUpdateNeeded(true);
    }
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    if (initialDescription !== newDescription) {
      setDrawingVersionUpdateNeeded(true); // DrawingVersionの更新が必要であることを示すフラグを立てる
    }
  };
  const onChangeVersionNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const newVersionNumber = event.target.value;
    setVersionNumber(newVersionNumber);
    if (initialVersionNumber !== newVersionNumber) {
      setDrawingVersionUpdateNeeded(true);
    }
  };

  let updatedDrawing: Partial<Drawing> = {};
  let updatedVersion: Partial<DrawingVersion> = {};

  // もし変更されているなら、対応する更新フラグを立てる
  const onClickUpdate = () => {
    if (drawingVersion) {
      if (isDrawingUpdateNeeded) {
        updatedDrawing = {
          id: drawingVersion.drawing.id,
          drawing_number: drawing_number,
          product_number: product_number,
          product_name: product_name,
          destination: destination,
          facility: facility,
          part_class: part_class,
          part_name: part_name,
        };
      }

      if (isDrawingVersionUpdateNeeded) {
        updatedVersion = {
          id: drawingVersion.id,
          drawing_id: drawingVersion.drawing.id,
          description: description,
          version_number: version_number,
        };
      } else {
        updatedVersion = {
          id: drawingVersion.id,
          drawing_id: drawingVersion.drawing.id,
          description: description,
          version_number: version_number,
        };
      }

      //undefined防止
      //idプロパティ以外にも何かしらのプロパティを持っているかどうか
      console.log(updatedDrawing);
      console.log(updatedVersion);
      if ((Object.keys(updatedDrawing).length > 1 || Object.keys(updatedVersion).length > 2) && drawingVersion) {
        update({ drawing: updatedDrawing, version: updatedVersion }).then(() => {
          // console.log('updated!');
          setTimeout(() => {
            onClose();
          }, 700);
          // onClose(); // モーダルを閉じる
          // navigate('/home'); // ログインページへリダイレクト;  // ホームにリダイレクトする
          getDrawingVersions('desc');
        });
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={6}>
          <Stack spacing={4}>
            {/* <Image
          boxSize="200px"
          borderRadius="5px"
          alt={user?.username}
          m="auto"
          src="https://source.unsplash.com/random"
          /> */}
            <FormControl>
              <FormLabel>図番</FormLabel>
              <Input value={drawing_number} isReadOnly={!isAdmin} onChange={onChangeDrawingNumber} />
            </FormControl>
            <FormControl>
              <FormLabel>変番</FormLabel>
              <Input value={version_number} isReadOnly={!isAdmin} onChange={onChangeVersionNumber} />
            </FormControl>
            <FormControl>
              <FormLabel>型式</FormLabel>
              <Input value={product_number} isReadOnly={!isAdmin} onChange={onChangeProductNumber} />
            </FormControl>
            <FormControl>
              <FormLabel>製品名</FormLabel>
              <Input value={product_name} isReadOnly={!isAdmin} onChange={onChangeProductName} />
            </FormControl>
            <FormControl>
              <FormLabel>向先</FormLabel>
              <Input value={destination} isReadOnly={!isAdmin} onChange={onChangeDestination} />
            </FormControl>
            <FormControl>
              <FormLabel>設備</FormLabel>
              <Input value={facility} isReadOnly={!isAdmin} onChange={onChangeFacility} />
            </FormControl>
            <FormControl>
              <FormLabel>部品分類</FormLabel>
              <Input value={part_class} isReadOnly={!isAdmin} onChange={onChangePartClass} />
            </FormControl>
            <FormControl>
              <FormLabel>部品名</FormLabel>
              <Input value={part_name} isReadOnly={!isAdmin} onChange={onChangePartName} />
            </FormControl>
            <FormControl>
              <FormLabel>図面詳細</FormLabel>
              <Input value={description} isReadOnly={!isAdmin} onChange={onChangeDescription} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <Flex align="center" justify="space-between">
              <Box pl={4}>
                <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
              </Box>
              <Box pl={4}>
                <PrimaryButton bgColor="red" textColor="white" hoverOpacity={0.8} onClick={onClickDelete}>
                  削除
                </PrimaryButton>
              </Box>
            </Flex>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
