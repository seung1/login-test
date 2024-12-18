"use client";

import { authStore } from "@/store/authStore";
import app from "@/utils/firebase";
import { Box } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const CurrentLoginUser = () => {
  const { user, setUser } = authStore();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return (
    <Box
      sx={{
        border: "2px solid black",
        borderRadius: 2,
        p: 2,
        minWidth: "500px",
        mb: 5,
      }}
    >
      현재 로그인중인 유저: {user?.displayName}
    </Box>
  );
};

export default CurrentLoginUser;
