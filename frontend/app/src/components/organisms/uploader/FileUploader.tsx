import { Button, Text, VStack } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

export const FileUploader: React.FC<{
  onFileSelected: (file: File) => void;
}> = ({ onFileSelected }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;
    onFileSelected(file);
    setFileName(file.name);
  };

  return (
    <VStack spacing={2}>
      <Button onClick={() => fileInputRef.current?.click()} colorScheme="blue" variant="outline">
        ファイルを選択
      </Button>
      <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleFileInput} />
      {fileName && (
        <Text fontSize="sm" as="b">
          選択されたファイル: {fileName}
        </Text>
      )}
    </VStack>
  );
};
