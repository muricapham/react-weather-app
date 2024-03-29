export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6659df6bf5msh18d9e1e397cb73bp1d9b2cjsn9afc7a1cd9b7",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // enter your key from openweather API
