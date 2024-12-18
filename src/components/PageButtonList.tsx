"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import PageButton from "./PageButton";
import { authStore } from "@/store/authStore";

const PageButtonList = () => {
  const { push } = useRouter();
  const { user } = authStore();

  const isLogin = useMemo(() => user !== null, [user]);

  const pageList = [
    {
      pageId: "/",
      pageName: "메인 페이지",
      onClick: () => push("/"),
    },
    {
      pageId: "/privacy",
      pageName: "로그인 필요 disabled",
      disabled: !isLogin,
      onClick: () => push("/privacy"),
    },
    {
      pageId: "/privacy",
      pageName: "로그인 필요 alert",
      onClick: () => {
        if (!isLogin) alert("로그인이 필요합니다.");
        else push("/privacy");
      },
    },
    {
      pageId: "/privacy",
      pageName: "로그인 필요 redirect",
      onClick: () => push("/privacy"),
    },
    {
      pageId: "/privacy",
      pageName: "로그인 필요 restricted",
      onClick: () => {
        if (!isLogin) push("/restricted");
        else push("/privacy");
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        my: 2,
        maxWidth: "500px",
        width: "100%",
      }}
    >
      {pageList.map((page, index) => (
        <PageButton key={index} {...page} onClick={page.onClick} />
      ))}
    </Box>
  );
};

export default PageButtonList;
