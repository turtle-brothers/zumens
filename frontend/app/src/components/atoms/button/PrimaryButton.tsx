import React, { memo, FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  hoverOpacity?: number;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const {
    children,
    disabled = false,
    loading = false,
    onClick,
    bgColor = 'teal.400', //デフォルト値設定
    textColor = 'white', //デフォルト値設定
    hoverOpacity = 0.8, //デフォルト値設定
  } = props;

  return (
    <Button bg={bgColor} color={textColor} _hover={{ opacity: hoverOpacity }} disabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </Button>
  );
});
