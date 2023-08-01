import React, { FC, useState, ChangeEvent } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useUserUpload } from '../../hooks/useUserUpload';
import { Menumune } from '../atoms/menu/Menumenu';

// import { BackButton } from '../atoms/button/BackButton';

export const UserUpload: FC = () => {
  const { uploadUser, loading } = useUserUpload();

  // User States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  // Event Handlers
  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const onChangeRole = (selectedItem: string | null) => {
    setRole(selectedItem || '');
  };

  const onSubmit = () => {
    if (username !== '' && password !== '' && role !== '') {
      uploadUser({
        user: { username, password, role },
      });
    }
  };

  const isButtonDisabled = username === '' || password === '' || role === '';

  return (
    <Flex align="center" justify="center" height="100vh" direction="column">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー登録
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="ユーザー名" value={username} onChange={onChangeUsername} />
          <Input placeholder="パスワード" value={password} onChange={onChangePassword} />
          {/* <Input placeholder="権限" value={role} onChange={onChangeRole} /> */}
          <Menumune menuTitle="権限" menuItems={['Admin', 'User']} value={role} onMenuChange={onChangeRole} />
          <PrimaryButton disabled={isButtonDisabled} loading={loading} onClick={onSubmit}>
            登録
          </PrimaryButton>
        </Stack>
      </Box>
      {/* <Box textAlign="center" py={10} px={6} mt={8}>
        <BackButton />
      </Box> */}
    </Flex>
  );
};
