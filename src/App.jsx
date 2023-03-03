import { useState } from "react";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // Calling json to map the response
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  // console.log("currentWeather", currentWeather);
  // console.log("forecastWeather", forecast);

  return (
    <div className="mx-auto my-5 h-screen max-w-full">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather?.weather && (
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(bgImgs/${currentWeather.weather[0].icon}.png)`,
          }}
        >
          <div className="mx-auto my-0 h-[95vh] max-w-[720px]">
            {/* Only show component if there is currentWeather data */}
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
