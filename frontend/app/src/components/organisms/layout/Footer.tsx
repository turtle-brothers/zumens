import React, { memo, FC } from 'react';
import { Stack, Box, Flex, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Footer: FC = memo(() => {
  const navigate = useNavigate();

  const onClickPrivacyPolicy = () => navigate('/home/privacy_policy');
  const onClickTermsOfUse = () => navigate('/home/terms_of_use');

  return (
    <>
      <Flex as="footer" bg="gray.100" color="gray.800" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Stack
          maxW="2x1"
          marginInline="auto"
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex align="center" fontSize="sm" flexGrow={2}>
            <Box pr={4} color="blue.500">
              <Link onClick={onClickPrivacyPolicy}>プライバシーポリシー</Link>
            </Box>

            <Box pr={4} color="blue.500">
              <Link onClick={onClickTermsOfUse}>利用規約</Link>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
});
