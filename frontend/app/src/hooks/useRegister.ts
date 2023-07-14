/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useRegister = () => {
  const navigate = useNavigate();

  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  // 新規登録処理
  const signup = useCallback((id: string, password: string) => {
    setLoading(true);
    // ここで新規登録のAPIを呼び出す
    axios
      .post("https://example.com/signup", {
        id,
        password,
      })
      .then(async res => {
        if (res.data) {
          showMessage({ title: "登録に成功しました", status: "success" });
          navigate("/"); // ログインページへリダイレクト
        } else {
          showMessage({ title: "登録に失敗しました", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "エラーが発生しました", status: "error" });
        setLoading(false);
      });
  }, [navigate, showMessage]);

  return { signup, loading };  // signupを返り値に追加
};
