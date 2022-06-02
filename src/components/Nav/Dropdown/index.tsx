import WeatherCard from 'src/components/WeatherCard';
import useStore from 'src/store/store';
import { City } from 'src/types/weather';

import HighlightText from '../../HighlightText';
import Card from '../../WeatherCard/components/Card';
import Menu from '../Menu';
import { Props } from './types';

const Dropdown: React.FC<Props> = ({ cities, setDropdown }) => {
  const setCity = useStore((state) => state.setCity);

  const onClickCity = (city: City) => {
    setCity(city);
    setDropdown(false);
  };

  const onClick = () => {
    setDropdown(false);
  };

  return (
    <Menu>
      {cities.length ? (
        cities.map((city, index) => (
          <WeatherCard
            onClick={() => onClickCity(city)}
            city={city.url}
            key={city.url}
            index={index}
          />
        ))
      ) : (
        <Card onClick={onClick}>
          <HighlightText size={20}>Your search history is clear!</HighlightText>

          <p>Use the search option. Your searches will be saved here</p>
          <p>on each session.</p>
        </Card>
      )}
      ;
    </Menu>
  );
};

export default Dropdown;
