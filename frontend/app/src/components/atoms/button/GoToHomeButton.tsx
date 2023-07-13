import { Button, Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { useNavigate } from "react-router-dom";


export const GoToHomeButton: FC = memo(() => {

    const navigate = useNavigate();
    const onClickHome = () => navigate("/home");

  return (
  <>
    <Link onClick={onClickHome}>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        ホームに戻る
      </Button>
    </Link>
  </>
  );
});
