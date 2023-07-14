import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';
import { memo, FC } from 'react';

import { GoToHomeButton } from '../atoms/button/GoToHomeButton';

export const Page404: FC = memo(() => {
  return (
    <>
      {/* <p>404ページです</p>; */}
      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          ページが見つかりません。
        </Text>
        <Text color={'gray.500'} mb={6}>
          お探しのページは存在しないようです。
        </Text>

        {/* ホームへ戻る */}
        <GoToHomeButton />
      </Box>
    </>
  );
});
