import React, { memo, FC } from 'react';
import { Box, Stack, Image, Text, Tag, HStack } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="250px"
      h="300px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="5px" alt={userName} m="auto" src={imageUrl} />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
        <HStack spacing={4}>
          <Tag size={'md'} key={'md'} variant="solid" colorScheme="teal">
            {fullName}
          </Tag>
        </HStack>
      </Stack>
    </Box>
  );
});
