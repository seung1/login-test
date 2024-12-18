import type { Metadata } from "next";
import "./globals.css";
import LoginBanner from "@/components/LoginBanner";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "로그인 프로젝트",
  description: "로그인 공부를 위한 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <LoginBanner />

          <Box sx={{ minHeight: "400px" }}>{children}</Box>
        </Box>
      </body>
    </html>
  );
}
