import React, { memo, FC } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: any;
  onClickHome: () => void;
  onClickRoute: () => void;
  onClickUpload: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickRoute, onClickUpload } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUpload}>
              図面登録
            </Button>
            <Button w="100%" onClick={onClickRoute}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
