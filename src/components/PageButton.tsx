"use client";

import { usePathname } from "next/navigation";
import { ButtonProps, Button } from "@mui/material";

const PageButton = (
  {
    pageId,
    pageName,
    ...props
  }: {
    pageId: string;
    pageName: string;
  } & ButtonProps = { pageId: "", pageName: "" }
) => {
  const pathName = usePathname();

  return (
    <Button
      sx={{
        flex: 1,
        cursor: "pointer",
        transition: "all 0.3s",

        color: pathName === pageId ? "#1976d2" : "inherit",
        fontWeight: pathName === pageId ? 800 : 400,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        wordBreak: "keep-all",
      }}
      {...props}
    >
      {pageName}
    </Button>
  );
};

export default PageButton;
