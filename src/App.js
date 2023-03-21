import "./App.css";
import { Fragment, useState } from "react";
import InfoBase from "./components/InfoBase";
import WeatherCard from "./components/WeatherCard";
import LocationSearch from "./components/LocationSearch";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState();

  return (
    <Fragment>
      <InfoBase>
        <LocationSearch setLocation={setLocation} location={location} />
        <WeatherCard data={data} setData={setData} location={location} />
      </InfoBase>
    </Fragment>
  );
}

export default App;
