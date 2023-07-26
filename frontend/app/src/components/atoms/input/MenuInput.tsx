import { InputGroup, InputLeftElement, Input, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

interface Props extends BoxProps {
  icon?: ReactElement;
  type?: string;
  value?: string | null;
  placeholder: string;
  onInputChange?: (value: string) => void;
}

export const MenuInput: FC<Props> = ({ icon, type, value, placeholder, onInputChange, ...props }) => {
  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
      <Input type={type} placeholder={placeholder} value={value || ''} onChange={(event) => onInputChange && onInputChange(event.target.value)} />
    </InputGroup>
  );
};
