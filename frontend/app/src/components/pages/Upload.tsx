import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack, Select } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useUpload } from '../../hooks/useUpload';
import { FileUploader } from '../organisms/uploader/FileUploader';

export const Upload: FC = () => {
  const { upload, loading, drawings, fetchDrawings } = useUpload();

  // Drawing States
  const [drawing_number, setDrawingNumber] = useState('');
  const [product_number, setProductNumber] = useState('');
  const [product_name, setProductName] = useState('');
  const [destination, setDestination] = useState('');
  const [facility, setFacility] = useState('');
  const [part_class, setPartClass] = useState('');
  const [part_name, setPartName] = useState('');

  // Drawing Version States
  const [file_path, setFile] = useState<File | null>(null);
  const [version_number, setVersionNumber] = useState('');
  const [description, setDescription] = useState('');

  // Other States
  const [selectedDrawing, setSelectedDrawing] = useState<string | null>(null);

  // Event Handlers
  const onChangeDrawing = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDrawing(event.target.value);
    // console.log(event.target.value);
  };
  const onChangeDrawingNumber = (event: ChangeEvent<HTMLInputElement>) => setDrawingNumber(event.target.value);
  const onChangeVersionNumber = (event: ChangeEvent<HTMLInputElement>) => setVersionNumber(event.target.value);
  const onChangeProductNumber = (event: ChangeEvent<HTMLInputElement>) => setProductNumber(event.target.value);
  const onChangeProductName = (event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value);
  const onChangeDestination = (event: ChangeEvent<HTMLInputElement>) => setDestination(event.target.value);
  const onChangeFacility = (event: ChangeEvent<HTMLInputElement>) => setFacility(event.target.value);
  const onChangePartClass = (event: ChangeEvent<HTMLInputElement>) => setPartClass(event.target.value);
  const onChangePartName = (event: ChangeEvent<HTMLInputElement>) => setPartName(event.target.value);
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);

  const selectedDrawingObject = selectedDrawing ? drawings.find((drawing) => drawing.id === Number(selectedDrawing)) : null;

  const onSubmit = () => {
    console.log('selectedDrawing', selectedDrawing);
    console.log('file_path', file_path);
    console.log('version_number', version_number);
    console.log('description', description);

    version_number === '___'
      ? drawing_number !== '' &&
        product_number !== '' &&
        product_name !== '' &&
        destination !== '' &&
        facility !== '' &&
        part_class !== '' &&
        part_name !== '' &&
        file_path !== null &&
        description !== '' &&
        (console.log(
          'Uploading new drawing with drawing:',
          { drawing_number, product_number, product_name, destination, facility, part_class, part_name },
          'version:',
          { version_number, file: file_path, description }
        ),
        upload({
          drawing: { drawing_number, product_number, product_name, destination, facility, part_class, part_name },
          version: { version_number, file: file_path, description },
          isNewDrawing: true,
        }))
      : selectedDrawing !== null &&
        version_number !== '' &&
        file_path !== null &&
        description !== '' &&
        (console.log('Uploading new version with drawing:', selectedDrawingObject, 'version:', { version_number, file: file_path, description }),
        upload({
          drawing: selectedDrawingObject || {},
          version: { drawing_id: selectedDrawingObject ? selectedDrawingObject.id : undefined, version_number, file: file_path, description },
          isNewDrawing: false,
        }));
  };

  const isButtonDisabled =
    version_number === '___'
      ? drawing_number === '' ||
        product_number === '' ||
        product_name === '' ||
        destination === '' ||
        facility === '' ||
        part_class === '' ||
        part_name === '' ||
        file_path === null ||
        description === ''
      : selectedDrawing === null || version_number === '' || file_path === null || description === '';

  useEffect(() => {
    // When the version number is not "___", fetch the details of the selected drawing
    if (version_number !== '___') {
      const selectedDrawingDetails = selectedDrawing ? drawings.find((drawing) => drawing.id === Number(selectedDrawing)) : null;
      if (selectedDrawingDetails) {
        setDrawingNumber(selectedDrawingDetails.drawing_number);
      }
    }
  }, [version_number, selectedDrawing, drawings]);

  useEffect(() => {
    fetchDrawings();
  }, [fetchDrawings]);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          図面登録
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="変番" value={version_number} onChange={onChangeVersionNumber} />
          {version_number === '___' ? (
            <>
              <Input placeholder="図番" value={drawing_number} onChange={onChangeDrawingNumber} />
              <Input placeholder="型式" value={product_number} onChange={onChangeProductNumber} />
              <Input placeholder="製品名" value={product_name} onChange={onChangeProductName} />
              <Input placeholder="向先" value={destination} onChange={onChangeDestination} />
              <Input placeholder="設備" value={facility} onChange={onChangeFacility} />
              <Input placeholder="部品分類" value={part_class} onChange={onChangePartClass} />
              <Input placeholder="部品名" value={part_name} onChange={onChangePartName} />
            </>
          ) : (
            <>
              <Select placeholder="図面を選択" value={selectedDrawing || ''} onChange={onChangeDrawing}>
                {drawings.map((drawing) => (
                  <option key={drawing.id} value={drawing.id}>
                    {drawing.drawing_number}
                  </option>
                ))}
              </Select>
            </>
          )}
          <Input placeholder="図面の説明" value={description} onChange={onChangeDescription} />
          <FileUploader onFileSelected={setFile} />

          <PrimaryButton disabled={isButtonDisabled} loading={loading} onClick={onSubmit}>
            アップロード
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
