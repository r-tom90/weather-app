// GeoDB Rapid API
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_APP_GEODB_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// OpenWeather
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = `${import.meta.env.VITE_REACT_WEATHER_API_KEY}`;
