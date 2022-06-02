import { ChartData, Hour } from 'src/types/weather';

export default (forecastday_object: Hour[]) => {
  const chart_data: ChartData = { labels: [], data: [] };

  forecastday_object.map((hour, index) => {
    chart_data.labels.push(index);
    chart_data.data.push(hour.temp_c);
  });

  return chart_data;
};
