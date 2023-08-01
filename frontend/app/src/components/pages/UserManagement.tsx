import React, { memo, FC, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// useAllUsersとuseUserDeleteをインポートします
import { useAllUsers } from '../../hooks/useAllUsers';
import { useUserDelete } from '../../hooks/useUserDelete';

import { BackButton } from '../atoms/button/BackButton';

export const UserManagement: FC = memo(() => {
  // useAllUsersとuseUserDeleteを使用して、必要な値を取得します
  const { getUsers, users } = useAllUsers();
  const { deleteItem } = useUserDelete();

  // コンポーネントがマウントされたらgetUsersを実行します
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  // ユーザーを削除する関数を定義します
  const deleteUser = (id: number) => {
    deleteItem(id).then(() => {
      // 削除が成功したらユーザー一覧を再取得します
      getUsers();
    });
  };

  return (
    <>
      <Box boxShadow="sm" borderWidth="1px" borderColor="gray.200" borderRadius="md" p={4} m={8}>
        <Table variant="simple" colorScheme="gray" size={'lg'}>
          <Thead>
            <Tr>
              <Th>ユーザーID</Th>
              <Th>ユーザー名</Th>
              <Th>権限</Th>
              <Th>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={index}>
                <Td>{user.id}</Td>
                <Td>{user.username}</Td> {/* パスワードを直接表示するべきではありません */}
                <Td>{user.role}</Td>
                <Td>
                  <IconButton aria-label="Delete user" icon={<DeleteIcon />} onClick={() => deleteUser(user.id)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <BackButton />
      </Box>
    </>
  );
});
