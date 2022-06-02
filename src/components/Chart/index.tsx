import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { options } from 'src/constants/chart';
import constructChartData from 'src/utils/constructChartData';

import { Props } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ChartComponent: React.FC<Props> = ({ hourData }) => {
  const chartData = constructChartData(hourData);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Temperature ºC',
        data: chartData.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default ChartComponent;
