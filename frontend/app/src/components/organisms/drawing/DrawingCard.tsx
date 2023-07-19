import React, { memo, FC } from 'react';
import { Box, Stack, Image, Text, Tag, Flex } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  drawing_number: string;
  product_number: string;
  product_name: string;
  destination: string;
  facility: string;
  part_class: string;
  part_name: string;
  description: string;
  version_number: string;
  onClick: (id: number) => void;
};

export const DrawingCard: FC<Props> = memo((props) => {
  const {
    id,
    imageUrl,
    drawing_number,
    product_number,
    product_name,
    destination,
    facility,
    part_class,
    part_name,
    description,
    version_number,
    onClick,
  } = props;
  return (
    <Box
      w="250px"
      h="350px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="5px" alt={drawing_number} m="auto" src={imageUrl} />
        <Text fontSize="lg" fontWeight="bold">
          {`${drawing_number}-${version_number}`}
        </Text>
        <Text fontSize="sm" color="gray">
          {description}
        </Text>
        {/* <HStack spacing={4}> */}
        <Flex wrap="wrap">
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {product_number}
          </Tag>
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {product_name}
          </Tag>
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {destination}
          </Tag>
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {facility}
          </Tag>
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {part_class}
          </Tag>
          <Tag size={'md'} m={1} key={'md'} variant="solid" colorScheme="teal">
            {part_name}
          </Tag>
        </Flex>
        {/* </HStack> */}
      </Stack>
    </Box>
  );
});
