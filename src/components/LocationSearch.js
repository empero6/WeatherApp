import { Box, TextField } from "@mui/material";

const LocationSearch = ({ setLocation, location }) => {
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "block",
      }}
    >
      <TextField
        fullWidth
        size="small"
        sx={{ width: "200px", margin: "10px" }}
        label="Location"
        value={location}
        onChange={handleLocationChange}
      />
    </Box>
  );
};

export default LocationSearch;
