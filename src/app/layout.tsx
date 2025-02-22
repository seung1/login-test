import type { Metadata } from "next";
import "./globals.css";
import { Box } from "@mui/material";

import LoginBanner from "@/components/LoginBanner";
import PageButtonList from "@/components/PageButtonList";

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
            minHeight: "100vh",
            px: 1,
            pt: 5,

            width: "100%",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <LoginBanner />
          <PageButtonList />

          <Box sx={{ minHeight: "400px", py: 3, width: "100%" }}>
            <main>{children}</main>
          </Box>
        </Box>
      </body>
    </html>
  );
}
