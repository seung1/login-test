"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

import { authStore } from "@/store/authStore";
import useLogin from "@/utils/useLogin";

export default function Restricted() {
  const { user } = authStore();
  const { push } = useRouter();
  const { tryLogin } = useLogin();

  useEffect(() => {
    if (user) push("/privacy");
  }, [user, push]);

  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        로그인이 필요한 페이지입니다
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        접근이 제한되었어요.
      </Typography>

      <Button variant="outlined" onClick={() => push("/")} sx={{ mr: 2 }}>
        메인페이지
      </Button>
      <Button variant="contained" onClick={() => tryLogin()}>
        로그인
      </Button>
    </Box>
  );
}
