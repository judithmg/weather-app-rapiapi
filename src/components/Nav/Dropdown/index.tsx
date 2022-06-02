import WeatherCard from 'src/components/WeatherCard';
import useStore from 'src/store/store';
import { City } from 'src/types/weather';

import Menu from '../Menu';
import { Props } from './types';

const Dropdown: React.FC<Props> = ({ cities, setDropdown }) => {
  const setCity = useStore((state) => state.setCity);

  const onClickCity = (city: City) => {
    setCity(city);
    setDropdown(false);
  };
  return (
    <Menu>
      {cities &&
        cities.map((city) => (
          <WeatherCard
            onClick={() => onClickCity(city)}
            city={city.url}
            key={city.url}
          />
        ))}
      ;
    </Menu>
  );
};

export default Dropdown;
