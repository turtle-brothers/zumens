import React, { memo, FC } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

import { Menumune } from '../atoms/menu/Menumenu';
import { MenuInput } from '../atoms/input/MenuInput';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

type Props = {
  drawingNumber: string | null;
  productNumber: string | null;
  versionNumber: string | null;
  partName: string | null;
  productName: string | null;
  destination: string | null;
  facility: string | null;
  partClass: string | null;
  onDrawingNumberChange: React.Dispatch<React.SetStateAction<string | null>>;
  onProductNumberChange: React.Dispatch<React.SetStateAction<string | null>>;
  onVersionNumberChange: React.Dispatch<React.SetStateAction<string | null>>;
  onPartNameChange: React.Dispatch<React.SetStateAction<string | null>>;
  onProductNameChange: React.Dispatch<React.SetStateAction<string | null>>;
  onDestinationChange: React.Dispatch<React.SetStateAction<string | null>>;
  onFacilityChange: React.Dispatch<React.SetStateAction<string | null>>;
  onPartClassChange: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MenuSearch: FC<Props> = memo((props) => {
  const {
    drawingNumber,
    productNumber,
    versionNumber,
    partName,
    productName,
    destination,
    facility,
    partClass,
    onDrawingNumberChange,
    onProductNumberChange,
    onVersionNumberChange,
    onPartNameChange,
    onProductNameChange,
    onDestinationChange,
    onFacilityChange,
    onPartClassChange,
  } = props;

  const resetInputs = () => {
    onDrawingNumberChange(null);
    onProductNumberChange(null);
    onVersionNumberChange(null);
    onPartNameChange(null);
    onProductNameChange(null);
    onDestinationChange(null);
    onFacilityChange(null);
    onPartClassChange(null);
  };

  return (
    <>
      <Box border="2px" borderColor="gray.900" borderRadius="md" p={4} mt={8} mr={8} ml={8} mb={4} backgroundColor="gray.100">
        <Flex justifyContent="space-between" mb={4}>
          <Heading as="h3" size="md">
            検索条件
          </Heading>
          <PrimaryButton bgColor="orange.300" textColor="white" hoverOpacity={0.8} onClick={resetInputs}>
            リセット
          </PrimaryButton>
        </Flex>
        {/* 1段目のメニューバー */}
        <Flex fontSize="sm" flexGrow={2} justifyContent="space-between" alignItems="center">
          <MenuInput placeholder="図番" value={drawingNumber} onInputChange={onDrawingNumberChange} />
          <Box width="20px" />
          <MenuInput placeholder="型式" value={productNumber} onInputChange={onProductNumberChange} />
          <Box width="20px" />
          <MenuInput placeholder="変番" value={versionNumber} onInputChange={onVersionNumberChange} />
          <Box width="20px" />
          <MenuInput placeholder="部品名" value={partName} onInputChange={onPartNameChange} />
        </Flex>

        <Box height="5px" />

        {/* 2段目のメニューバー */}
        <Flex>
          <Menumune
            menuTitle="製品名"
            menuItems={['RCL', 'TL', 'BUL', 'HMSL', 'LPL']}
            value={productName}
            onMenuChange={(val) => onProductNameChange(val ?? '')}
          />
          <Box width="20px" />
          <Menumune
            menuTitle="向先"
            menuItems={['JP', 'NAL', 'NALメキシコ', 'NALブラジル', 'IJL', 'TAI', 'MAL', 'KCZ', 'KEL']}
            value={destination}
            onMenuChange={(val) => onDestinationChange(val ?? '')}
          />
          <Box width="20px" />
          <Menumune
            menuTitle="設備サイズ"
            menuItems={['L', 'LLD', 'LLDH', 'LLDW', 'LLD3H', '4L', '4LW', '6L']}
            value={facility}
            onMenuChange={(val) => onFacilityChange(val ?? '')}
          />
          <Box width="20px" />
          <Menumune
            menuTitle="設備区分"
            menuItems={['LENS_IRON', 'BODY_IRON', 'LENS_JIG', 'BODY_JIG']}
            value={partClass}
            onMenuChange={(val) => onPartClassChange(val ?? '')}
          />
        </Flex>
      </Box>
    </>
  );
});
