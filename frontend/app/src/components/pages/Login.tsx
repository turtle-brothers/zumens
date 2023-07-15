import React, { memo, FC, useState, ChangeEvent } from 'react';
import { Box, Checkbox, Divider, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [termsOfUse, setTermsOfUse] = useState(false);

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => setuserId(event.target.value);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  // const onClickLogin = () => login(userId, password);

  const onClickLogin = () => {
    if (userId !== '' && password !== '' && privacyPolicy && termsOfUse) {
      login(userId, password);
    }
  };

  const navigate = useNavigate();

  const onClickPolicy = () => {
    setPrivacyPolicy(!privacyPolicy);
    navigate('/home/privacy_policy');
  };

  const onClickTerms = () => {
    setTermsOfUse(!termsOfUse);
    navigate('/home/terms_of_use');
  };

  const onClickSignUp = () => {
    navigate('/home/signup');
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          図面管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <Input placeholder="パスワード" type="password" value={password} onChange={onChangePassword} />
          <Checkbox colorScheme="green" isChecked={privacyPolicy} onChange={() => setPrivacyPolicy(!privacyPolicy)}>
            <Text as="span" color="blue.500" onClick={onClickPolicy} cursor="pointer">
              プライバシーポリシーに同意する
            </Text>
          </Checkbox>
          <Checkbox colorScheme="green" isChecked={termsOfUse} onChange={() => setTermsOfUse(!termsOfUse)}>
            <Text as="span" color="blue.500" onClick={onClickTerms} cursor="pointer">
              利用規約に同意する
            </Text>
          </Checkbox>

          <PrimaryButton disabled={userId === '' || password === '' || !privacyPolicy || !termsOfUse} loading={loading} onClick={onClickLogin}>
            ログイン
          </PrimaryButton>

          <PrimaryButton bgColor="orange.300" textColor="white" hoverOpacity={0.8} loading={loading} onClick={onClickSignUp}>
            新規登録
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
