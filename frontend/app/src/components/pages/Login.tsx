import { memo, FC, useState, ChangeEvent } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setuserId] = useState("");
  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) =>
    setuserId(event.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          図面管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          {/* パスワードのロジックを追加する */}
          {/* <Input
            placeholder="パスワード"
            value={password}
            onChange={onChangePassword}
          /> */}
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
