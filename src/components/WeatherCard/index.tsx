import HighlightEffect from 'src/components/HighlightText';
import { days, forecast_url, headers } from 'src/constants/api';
import useFetch from 'src/hooks/useFetch';
import { Weather } from 'src/types/weather';

import Card from './components/Card';
import Image from './components/Image';
import { H2 } from './components/Text';
import { Props } from './types';

const WeatherCard: React.FC<Props> = ({ city, onClick }) => {
  const url = `${forecast_url}${city}${days}`;

  const { data, loading } = useFetch<Weather>(url, headers);
  return (
    <Card onClick={() => onClick(city)}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <HighlightEffect>{data?.location.name}</HighlightEffect>
          <H2>{data?.current.temp_c}°C</H2>
          <Image
            src={data?.current.condition.icon}
            alt={data?.current.condition.text}
          />
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
