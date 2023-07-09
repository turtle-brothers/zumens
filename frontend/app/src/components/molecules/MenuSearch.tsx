import { memo, FC } from "react";
import { Flex, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const MenuSearch: FC = memo(() => {
  return (
    <>
      {/* 1段目のメニューバー */}
      <Flex
        fontSize="sm"
        flexGrow={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

      </Flex>

      {/* 2段目のメニューバー */}
      <Flex
        fontSize="sm"
        flexGrow={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={{ base: "ms", md: "md" }}>
          Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

      </Flex>

    </>
  );
});
