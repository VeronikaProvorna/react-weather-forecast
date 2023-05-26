import { useParams } from "react-router-dom";
import { fetchWeatherData } from "../../api/fetchData";
import WeatherCard from "../../components/WeatherCard";
import { useState, useEffect } from "react";

const WeatherPage = () => {
  const { location } = useParams();

  // useState("true") please never do somethign like this
  // use boolean values as is
  // the whole logic is also a big weak -  the loading should not be true while the request to BE is not sent
  // please think how to update it
  const [isLoading, setIsLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState("");
  const [weather, setWeather] = useState({});

  const fecthDataWrapper = async () => {
    // please don't mix async await and promises
    // use one of it
    setIsLoading(true);
    const res = await fetchWeatherData(location);
    // in case of await there is no garantee that data is there
    // extra checks are always required
    if (res) {
      setIsLoading(res.isLoading);
      setCityNotFound(res.cityNotFound);
      setWeather(res.weather);
    }
  };

  useEffect(() => {
    // location === "null" is not a wellknown thing
    // if js please check empty data eg '', undefined, null etc.
    // if you don't provide location undefined is used to check
    // please pay attention to this 3 types of empty data
    if (!location) {
      setIsLoading(false);
      setCityNotFound("404");
    }

    fecthDataWrapper();
  }, []);

  return (
    <WeatherCard
      isLoading={isLoading}
      cityNotFound={cityNotFound}
      weather={weather}
    />
  );
};

export default WeatherPage;
