import { Box } from "@mui/material";

import PageButton from "./PageButton";

const PageButtonList = () => {
  const pageList = [
    {
      pageId: "/",
      pageName: "메인 페이지",
    },
    {
      pageId: "/privacy",
      pageName: "로그인이 필요한 페이지",
    },
    {
      pageId: "/public",
      pageName: "공개 페이지",
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
      {pageList.map((page) => (
        <PageButton key={page.pageId} {...page} />
      ))}
    </Box>
  );
};

export default PageButtonList;
