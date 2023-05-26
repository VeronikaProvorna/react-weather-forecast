// good to have it separate, special in case of using inseveral place
const APIURL = "http://localhost:5000/weather/location/";

export const fetchWeatherData = async (location) => {
  try {
    const res = await fetch(`${APIURL}${location}`);
    const { data = {} } = await res.json();

    if (data === "not found") {
      return {
        isLoading: false,
        cityNotFound: true, // please use boolean in case you don't show specific errors for each code.
        weather: {},
      };
    }
    // would suggest to use destructuring here before creating new object
    // also goo to check the data validity before assigning to result
    // formating is nice to have to move to utils
    return {
      isLoading: false,
      cityNotFound: false,
      weather: {
        currentTemp: data.main?.temp,
        weatherIcon: data.weather[0]?.icon, // please check possible value absense and prevent failing
        weatherDescr: data.weather[0]?.description,
        minTemp: data.main?.temp_min,
        maxTemp: data.main?.temp_max,
        humidity: data.main?.humidity,
        windSpeed: data.wind?.speed,
        cityName: data?.name,
      },
    };
  } catch (e) {
    // please read more about error processing
    return {
      isLoading: false,
      cityNotFound: true,
      weather: {},
    };
  }
};
