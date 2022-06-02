export const headers = {
  'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
  'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
};

export const find_city_url =
  'https://weatherapi-com.p.rapidapi.com/search.json?q=';

export const api_auto_url =
  'https://weatherapi-com.p.rapidapi.com/ip.json?q=auto:ip';

export const forecast_url =
  'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
export const days = '&days=3';
// Example: 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Barcelona&days=3';
