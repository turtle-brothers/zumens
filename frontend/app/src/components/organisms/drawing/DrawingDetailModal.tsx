import React, { ChangeEvent, memo, useEffect, useState, FC } from 'react';
import {
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

import { DrawingVersion } from '../../../types/api/drawing';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
  // user: User | undefined;
  drawingVersion: DrawingVersion | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const DrawingDetailModal: FC<Props> = memo((props) => {
  const { drawingVersion, isOpen, onClose, isAdmin = false } = props;

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

  const onChangeDrawingNumber = (e: ChangeEvent<HTMLInputElement>) => setDrawingNumber(e.target.value);
  const onChangeProductNumber = (e: ChangeEvent<HTMLInputElement>) => setProductNumber(e.target.value);
  const onChangeProductName = (e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value);
  const onChangeDestination = (e: ChangeEvent<HTMLInputElement>) => setDestination(e.target.value);
  const onChangeFacility = (e: ChangeEvent<HTMLInputElement>) => setFacility(e.target.value);
  const onChangePartClass = (e: ChangeEvent<HTMLInputElement>) => setPartClass(e.target.value);
  const onChangePartName = (e: ChangeEvent<HTMLInputElement>) => setPartName(e.target.value);
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const onChangeVersionNumber = (e: ChangeEvent<HTMLInputElement>) => setVersionNumber(e.target.value);

  const onClickUpdate = () => {
    console.log(drawing_number);
    console.log(product_number);
    console.log(product_name);
    console.log(destination);
    console.log(facility);
    console.log(part_class);
    console.log(part_name);
    console.log(description);
    console.log(version_number);
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
            {/* <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input type="tel" value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
            </FormControl> */}
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
