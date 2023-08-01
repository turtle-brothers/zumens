import React, { memo, FC } from 'react';
import { Box, Button, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useLoginUser } from '../../../providers/LoginUserProvider';
import { AddIcon } from '@chakra-ui/icons';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { LoginUser } = useLoginUser();

  const navigate = useNavigate();
  const location = useLocation();

  const onClickRoute = () => navigate('/');
  const onClickHome = () => navigate('/home');
  const onClickUpload = () => navigate('/home/upload');
  const onClickUserManagement = () => navigate('/home/user_management');
  const onClickSignUp = () => navigate('/home/user_management_upload');

  const isUserManagementPage = location.pathname === '/home/user_management';

  console.log('isUserManagementPage');

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
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            図面管理アプリ
          </Heading>
        </Flex>
        <Flex>
          {/* {LoginUser?.isAdmin && (
            <Box pr={4}>
              <Link onClick={onClickUserManagement}>
                <Button colorScheme="orange" size="md">
                  ユーザー管理
                </Button>
              </Link>
            </Box>
          )} */}
          {LoginUser?.isAdmin && (
            <Box pr={4}>
              {isUserManagementPage ? ( // 管理画面であればユーザー登録ボタンを表示
                <Link onClick={onClickSignUp}>
                  <Button leftIcon={<AddIcon />} colorScheme="blue" size="md">
                    ユーザー登録
                  </Button>
                </Link>
              ) : (
                <Link onClick={onClickUserManagement}>
                  <Button colorScheme="orange" size="md">
                    ユーザー管理
                  </Button>
                </Link>
              )}
            </Box>
          )}
          <Box pr={4}>
            {!isUserManagementPage && ( // 管理画面でなければ図面登録ボタンを表示
              <Link onClick={onClickUpload}>
                <Button leftIcon={<AddIcon />} colorScheme="blue" size="md">
                  図面登録
                </Button>
              </Link>
            )}
          </Box>
          <Box pr={4}>
            <Link onClick={onClickRoute}>
              <Button colorScheme="red" size="md">
                ログアウト
              </Button>
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        {/* </Flex> */}
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickRoute={onClickRoute} onClickUpload={onClickUpload} />
    </>
  );
});
