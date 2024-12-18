"use client";

import { authStore } from "@/store/authStore";
import app from "@/utils/firebase";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

const LoginBanner = () => {
  const { user, setUser } = authStore();

  const [loading, setLoading] = useState(true);

  const isLogin = useMemo(() => user !== null, [user]);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account", // 계정 선택을 항상 강제
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, setUser]);

  const tryLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.error(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <Box
      sx={{
        border: "2px solid black",
        borderRadius: 2,
        p: 2,
        minWidth: "500px",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
        로그인 정보
      </Typography>

      {loading ? (
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
            현재 로그인중인 유저: {user?.displayName}
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
    </Box>
  );
};

export default LoginBanner;
