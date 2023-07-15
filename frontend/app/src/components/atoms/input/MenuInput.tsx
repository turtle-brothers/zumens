import { InputGroup, InputLeftElement, Input, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

interface Props extends BoxProps {
  icon?: ReactElement;
  type: string;
  placeholder: string;
}

export const MenuInput: FC<Props> = ({ icon, type, placeholder, ...props }) => {
  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
      <Input type={type} placeholder={placeholder} />
    </InputGroup>
  );
};
