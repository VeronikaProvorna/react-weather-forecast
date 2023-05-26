import { Link } from "react-router-dom";
import "../../components/WeatherCard/weatherCard.css";

const CityError = () => {
    return (
      <>
        <p className="f4">Location not found</p>
        <Link to="/" className="btnChange br2 linkBack">
          Try again
        </Link>
      </>
    );
}

export default CityError;