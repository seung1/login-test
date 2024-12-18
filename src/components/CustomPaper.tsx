import type { BoxProps, SxProps } from "@mui/material";
import { Box } from "@mui/material";

const CustomPaper = ({
  children,
  sx,
  ...props
}: {
  children: React.ReactNode;
  sx?: SxProps;
} & BoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--card-background)",
        boxShadow: "var(--card-box-shadow)",
        border: "var(--card-border)",
        width: "100%",

        borderRadius: 2,
        p: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomPaper;
