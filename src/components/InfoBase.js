import { Box } from "@mui/material";

const InfoBase = ({ children }) => {
  return (
    <Box
      sx={{
        borderRadius: "2px",
        height: "200px",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default InfoBase;
