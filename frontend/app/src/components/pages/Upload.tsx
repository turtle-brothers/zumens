import React, { FC, useState, ChangeEvent } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useUpload } from '../../hooks/useUpload';
import { FileUploader } from '../organisms/uploader/FileUploader';

export const Upload: FC = () => {
  const { upload, loading } = useUpload();
  const [drawingNumber, setDrawingNumber] = useState('');
  const [versionNumber, setVersionNumber] = useState('');
  const [productNumber, setProductNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [destination, setDestination] = useState('');
  const [facility, setFacility] = useState('');
  const [partClass, setPartClass] = useState('');
  const [partName, setPartName] = useState('');

  const [file, setFile] = useState<File | null>(null);

  const onChangeDrawingNumber = (event: ChangeEvent<HTMLInputElement>) => setDrawingNumber(event.target.value);
  const onChangeVersionNumber = (event: ChangeEvent<HTMLInputElement>) => setVersionNumber(event.target.value);
  const onChangeProductNumber = (event: ChangeEvent<HTMLInputElement>) => setProductNumber(event.target.value);
  const onChangeProductName = (event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value);
  const onChangeDestination = (event: ChangeEvent<HTMLInputElement>) => setDestination(event.target.value);
  const onChangeFacility = (event: ChangeEvent<HTMLInputElement>) => setFacility(event.target.value);
  const onChangePartClass = (event: ChangeEvent<HTMLInputElement>) => setPartClass(event.target.value);
  const onChangePartName = (event: ChangeEvent<HTMLInputElement>) => setPartName(event.target.value);

  const onSubmit = () => {
    if (
      drawingNumber !== '' &&
      versionNumber !== '' &&
      productNumber !== '' &&
      productName !== '' &&
      destination !== '' &&
      facility !== '' &&
      partClass !== '' &&
      partName !== '' &&
      file
    ) {
      upload(drawingNumber, versionNumber, productNumber, productName, destination, facility, partClass, partName, file);
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          図面登録
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="図番" value={drawingNumber} onChange={onChangeDrawingNumber} />
          <Input placeholder="変番" value={versionNumber} onChange={onChangeVersionNumber} />
          <Input placeholder="型式" value={productNumber} onChange={onChangeProductNumber} />
          <Input placeholder="製品名" value={productName} onChange={onChangeProductName} />
          <Input placeholder="向先" value={destination} onChange={onChangeDestination} />
          <Input placeholder="設備" value={facility} onChange={onChangeFacility} />
          <Input placeholder="部品分類" value={partClass} onChange={onChangePartClass} />
          <Input placeholder="部品名" value={partName} onChange={onChangePartName} />
          <FileUploader onFileSelected={setFile} />
          <PrimaryButton
            disabled={
              drawingNumber === '' ||
              versionNumber === '' ||
              productNumber === '' ||
              productName === '' ||
              destination === '' ||
              facility === '' ||
              partClass === '' ||
              partName === '' ||
              !file
            }
            loading={loading}
            onClick={onSubmit}
          >
            アップロード
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
