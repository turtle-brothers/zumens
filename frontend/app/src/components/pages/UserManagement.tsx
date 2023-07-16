import React, { memo, FC, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// ユーザーデータの型を定義します
interface User {
  id: string;
  password: string; // 通常はパスワードを直接保持・表示するべきではありません！
  role: string;
}

export const UserManagement: FC = memo(() => {
  // ユーザーデータのステートを定義します
  const [users, setUsers] = useState<User[]>([
    // ここに初期データを設定できます
    { id: 'user1', password: 'password1', role: 'admin' },
    { id: 'user2', password: 'password2', role: 'user' },
    { id: 'user3', password: 'password3', role: 'user' },
    { id: 'user4', password: 'password4', role: 'user' },
    { id: 'user5', password: 'password5', role: 'user' },
    { id: 'user6', password: 'password6', role: 'user' },
    { id: 'user7', password: 'password7', role: 'admin' },

    // ...
  ]);

  // ユーザーを削除する関数を定義します
  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <Box boxShadow="sm" borderWidth="1px" borderColor="gray.200" borderRadius="md" p={4} m={8}>
        {/* <TableContainer> */}
        <Table variant="simple" colorScheme="gray" size={'lg'}>
          <Thead>
            <Tr>
              <Th>ユーザーID</Th>
              <Th>パスワード</Th>
              <Th>権限</Th>
              <Th>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={index}>
                <Td>{user.id}</Td>
                <Td>********</Td> {/* パスワードを直接表示するべきではありません */}
                <Td>{user.role}</Td>
                <Td>
                  <IconButton aria-label="Delete user" icon={<DeleteIcon />} onClick={() => deleteUser(user.id)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {/* </TableContainer> */}
      </Box>
    </>
  );
});
