const location = "Tangancicuaro de Arista, MX";
const api_key = "1529319e09a8a206437dea00af57e3ab";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;