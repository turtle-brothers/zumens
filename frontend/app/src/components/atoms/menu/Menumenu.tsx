import React, { FC } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, BoxProps } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface Props extends BoxProps {
  menuTitle: string;
  menuItems: string[];
  value?: string | null;
  onMenuChange?: (selectedItem: string | null) => void;
}

export const Menumune: FC<Props> = ({ menuTitle, menuItems, value, onMenuChange, ...props }) => {
  return (
    <Menu placement="bottom" {...props}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%" variant="outline">
        {value || menuTitle}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onMenuChange && onMenuChange(null)}>{menuTitle}</MenuItem>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => onMenuChange && onMenuChange(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
