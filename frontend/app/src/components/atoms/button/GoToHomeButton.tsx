/* eslint-disable react/display-name */

import React from 'react';

import { Button, Link } from '@chakra-ui/react';
import { memo, FC } from 'react';

export const GoToHomeButton: FC = memo(() => {
  const onClickHome = () => window.history.back();

  return (
    <>
      <Link onClick={onClickHome}>
        <Button colorScheme="teal" bgGradient="linear(to-r, teal.400, teal.500, teal.600)" color="white" variant="solid">
          戻る
        </Button>
      </Link>
    </>
  );
});
