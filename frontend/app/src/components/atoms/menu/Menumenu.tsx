import React from 'react';

import { Menu, MenuButton, Button, MenuList, MenuItem, BoxProps } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC } from 'react';

interface Props extends BoxProps {
  menuTitle: string;
  menuItems: string[];
}

export const Menumune: FC<Props> = ({ menuTitle, menuItems, ...props }) => {
  return (
    <Menu {...props}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%">
        {menuTitle}
      </MenuButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
