import React, { memo, FC } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';

import { Menumune } from '../atoms/menu/Menumenu';
import { MenuInput } from '../atoms/input/MenuInput';

export const MenuSearch: FC = memo(() => {
  return (
    <>
      <Box border="2px" borderColor="blue.500" borderRadius="md" p={4} m={8} backgroundColor="gray.100">
        <Heading as="h3" size="md" mb={4}>
          検索条件
        </Heading>

        {/* 1段目のメニューバー */}
        <Flex fontSize="sm" flexGrow={2} justifyContent="space-between" alignItems="center">
          <MenuInput type="mail" placeholder="e-mail" icon={<EmailIcon color="gray.300" />} />
          <MenuInput type="tel" placeholder="Phone number" icon={<PhoneIcon color="gray.300" />} />
          <MenuInput type="address" placeholder="Address" icon={<InfoIcon color="gray.300" />} />
          <MenuInput type="address" placeholder="Address" />
        </Flex>

        {/* 2段目のメニューバー */}
        <Flex>
          <Menumune menuTitle="Actions" menuItems={['Download', 'Create a Copy', 'Mark as Draft', 'Delete', 'Attend a Workshop']} />
          <Menumune menuTitle="Alphabet" menuItems={['A', 'B', 'C', 'D', 'E']} />
          <Menumune menuTitle="Number" menuItems={['1', '2', '3', '4', '5']} />
          <Menumune menuTitle="Number" menuItems={['1', '2', '3', '4', '5']} />
        </Flex>
      </Box>
    </>
  );
});
