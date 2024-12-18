"use client";

import { Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const PageButton = (
  {
    pageId,
    pageName,
  }: {
    pageId: string;
    pageName: string;
  } = { pageId: "", pageName: "" }
) => {
  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <Box
      onClick={() => push(pageId)}
      sx={{
        flex: 1,
        border: "2px solid",
        p: 2,
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.3s",
        color: pathName === pageId ? "#1976d2" : "black",
        fontWeight: pathName === pageId ? 800 : 400,
        borderColor: pathName === pageId ? "#1976d2" : "black",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        wordBreak: "keep-all",

        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {pageName}
    </Box>
  );
};

export default PageButton;
