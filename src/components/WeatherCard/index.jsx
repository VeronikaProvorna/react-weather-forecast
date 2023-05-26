import { Link } from "react-router-dom";
import "./weatherCard.css";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { toSentence } from "../../utils/toSentence";
import { getIcon } from "../../utils/getIcon";
import CityError from "../../components/CityError";
import Loading from "../../components/Preloader";

const WeatherCard = (props) => {
  // I would suggest to make them componenents eg
  // const  Loading = () => (
  //  <div>
  //   <p className="fr4">Loading...</p>
  // </div>
  // and take away from WeatherCard
  // The logic separation is not clear in this case
  // The code hear is actually WeatherCardWrapper since it shows 2 different components based on data
  // and WeatherCard is actually the code from const = WeatherCard ...

  // Just nice to have -> please learn mpre about destructuring and default values
  const {
    weather: {
      weatherIcon,
      currentTemp,
      weatherDescr,
      humidity,
      windSpeed,
      cityName,
    },
    isLoading = false,
    cityNotFound = false,
  } = props;

  const WeatherCard = (
    <>
      <div className="container br4">
        <div className="divIcon">
          <img
            src={getIcon(weatherIcon)}
            alt="Weather icon"
            width={150}
            height={150}
          />
        </div>
        <div className="divTemp">
          <span className="b temp f3">{Math.round(currentTemp) + " ℃"}</span>
          <span className="desc f4">{toSentence(weatherDescr)}</span>
        </div>
        <div className="divDate f4">
          <span>{getCurrentDate()}</span>
        </div>
        <div className="divHumAndWind f4">
          <p className="humAndWind">
            {"Humidity: " + humidity + " %"}
            <br />
            {"Wind speed: " + Math.round(windSpeed) + " mph"}
          </p>
        </div>
        <div className="divCity f3 b">
          <span>{cityName}</span>
        </div>
      </div>
      <div className="btnChange br2">
        <Link to={"/"} className="linkBack f4">
          Change City
        </Link>
      </div>
    </>
  );

  return (
    <div className="card-cont center sans-serif">
      {isLoading
        ? <Loading />
        : cityNotFound // better to use boolean in case of variables whoch manipulate state
        ? <CityError />
        : WeatherCard}
    </div>
  );
};

export default WeatherCard;
