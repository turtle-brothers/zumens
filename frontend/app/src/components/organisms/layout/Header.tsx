/**eslint-disable react-hooks/exhaustive-deps */
import { memo, FC } from "react";
import { Box, Button, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { AddIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onClickHome = () => navigate("/home");
  const onClickUserManagemaent = () => navigate("/home/user_management");
  const onClickUpload = () => navigate("/home/upload");


  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 1, md: 3 }}
        // padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            図面管理アプリ
          </Heading>
        </Flex>
        {/* <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        > */}
          {/* <Box pr={4}>
            <Link onClick={onClickUserManagemaent}>ユーザー一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickUpload}>図面登録</Link>
          </Box> */}
        <Flex>
          <Box pr={4}>
            <Link onClick={onClickUserManagemaent}>
              <Button leftIcon={<AddIcon />} colorScheme='blue' size='md'>
                図面登録
              </Button>
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickUpload}>
              <Button colorScheme='red' size='md'>
                ログアウト
              </Button>
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      {/* </Flex> */}
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagemaent}
        onClickUpload={onClickUpload}
      />
    </>
  );
});
