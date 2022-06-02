import { motion } from 'framer-motion';
import HighlightEffect from 'src/components/HighlightText';
import { days, forecast_url, headers } from 'src/constants/api';
import useFetch from 'src/hooks/useFetch';
import { Weather } from 'src/types/weather';

import Card from './components/Card';
import Image from './components/Image';
import { H2 } from './components/Text';
import { Props } from './types';

const WeatherCard: React.FC<Props> = ({ city, onClick, index }) => {
  const url = `${forecast_url}${city}${days}`;
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };
  const { data, loading } = useFetch<Weather>(url, headers);
  return (
    <Card onClick={() => onClick(city)}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <motion.div
          custom={{ delay: (index + 1) * 0.1 }}
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="hidden">
          <HighlightEffect>{data?.location.name}</HighlightEffect>
          <H2>{data?.current.temp_c}°C</H2>
          <Image
            src={data?.current.condition.icon}
            alt={data?.current.condition.text}
          />
        </motion.div>
      )}
    </Card>
  );
};

export default WeatherCard;
