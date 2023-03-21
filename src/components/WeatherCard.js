import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const WeatherCard = ({ location, data, setData }) => {
  useEffect(() => {}, [data]);

  const fetchData = async () => {
    setData();
    try {
      const apiKey = "06d13ff75e414b24801214404232802";

      const res = await axios.post(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`,
        {},
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (res.status < 200 || res.status >= 300) {
        throw new Error("Something went wrong");
      }
      setData(res.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <Card
      sx={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <CardContent
        sx={{
          alignContent: "center",
          width: "max content",
        }}
      >
        <Box>
          <button onClick={fetchData}>Fetch</button>
          {data ? (
            <Card
              sx={{
                maxWidth: 240,
                border: "2px solid azure",
                height: "30rem",
                backgroundColor: "azure",
                width: 300,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                alt="Weather Icon"
                src={data.current.condition.icon}
                sx={{
                  width: "83%",
                  margin: "1rem",
                }}
              />
              <CardContent>
                <Typography>{data.location.name}</Typography>
                <Typography variant={"h1"}>{data.current.temp_f}°</Typography>
                <Typography>{data.current.condition.text}</Typography>
                <Typography></Typography>
              </CardContent>
            </Card>
          ) : (
            <Box>
              <Typography>Empty</Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
