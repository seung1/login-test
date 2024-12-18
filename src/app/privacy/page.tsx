"use client";

import { authStore } from "@/store/authStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Avatar, Button, Box, Typography } from "@mui/material";
import {
  deleteUser,
  reauthenticateWithCredential,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Privacy() {
  const { user, setUser } = authStore();
  const { push } = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/privacy" && !user) push("/");
  }, [pathName, push, user]);

  // ! 계정 삭제말고 구글 연결 해제하는 방법 추가 필요!
  // const revokeGoogleAccess = async (token: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://accounts.google.com/o/oauth2/revoke?token=${token}`,
  //       {
  //         method: "POST",
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Google account connection revoked successfully.");
  //     } else {
  //       console.error("Failed to revoke Google account connection.");
  //     }
  //   } catch (error) {
  //     console.error("Error revoking token:", error);
  //   }
  // };

  const handleDeleteAccount = async () => {
    if (!user) return;

    // const token = user.stsTokenManager.accessToken;
    // revokeGoogleAccess(token);

    await deleteUser(user)
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (credential) reauthenticateWithCredential(user, credential);
      })
      .then(() => {
        setUser(null);
        push("/");
      });
  };

  if (!user) {
    // 로그인 되어있지 않은 사용자가 접근할때 반짝 보여지지 않도록 빈 div를 반환합니다.
    return <div></div>;
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
        개인 페이지
      </Typography>

      <Avatar
        src={user.photoURL || ""}
        sx={{ width: 100, height: 100, mb: 3 }}
      />

      <Typography variant="body1" sx={{ mb: 1 }}>
        {user.displayName}님 환영합니다.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        계정 생성일 : {user.metadata.creationTime}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        최근 로그인 : {user.metadata.lastSignInTime}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
        }}
      >
        <Button variant="contained" onClick={handleDeleteAccount}>
          계정 삭제
        </Button>
      </Box>
    </Box>
  );
}
