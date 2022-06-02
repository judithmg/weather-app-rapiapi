import { days, forecast_url } from 'src/constants/api';

import { City } from './../types/weather';

export default (
  cities: City[],
  latitude: number | undefined,
  longitude: number | undefined,
) =>
  cities.length
    ? `${forecast_url}${cities[cities.length - 1].url}${days}`
    : `${forecast_url}${latitude}%2C${longitude}${days}`;
