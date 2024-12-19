"use client";

import { authStore } from "@/store/authStore";
import app from "@/utils/firebase";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useMemo } from "react";
import CustomPaper from "./CustomPaper";
import { useRouter } from "next/navigation";
import useLogin from "@/utils/useLogin";

const LoginBanner = () => {
  const { user, setUser, isLoading, setIsLoading } = authStore();

  const { tryLogin } = useLogin();

  const { push } = useRouter();

  const isLogin = useMemo(() => user !== null, [user]);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, push, setUser, setIsLoading]);

  return (
    <CustomPaper>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
        로그인 정보
      </Typography>

      {isLoading ? (
        <Skeleton variant="rounded" sx={{ height: "40px" }} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography variant="body1">
            유저이름 : {user?.displayName}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              if (isLogin) {
                signOut(auth).then(() => {
                  setUser(null);
                });
              } else {
                tryLogin();
              }
            }}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </Button>
        </Box>
      )}
    </CustomPaper>
  );
};

export default LoginBanner;
