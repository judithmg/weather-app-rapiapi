import { ChangeEvent, useState } from 'react';
import { find_city_url, header } from 'src/constants/api';
import * as Colors from 'src/constants/colors';
import useFetch from 'src/hooks/useFetch';
import styled from 'styled-components';

import Input from '../../Input';

const MenuStyled = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: ${Colors.black};
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  ul {
    width: 100%;
  }

  p {
    color: ${Colors.white};
  }
`;

const ListItem = styled.li`
  text-align: center;
  color: ${Colors.white};
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid ${Colors.white};
`;

interface City {
  id: number;
  name: string;
  country: string;
  region: string;
  url: string;
  lat: number;
  lon: number;
}

const Menu: React.FC = () => {
  const [city, setCity] = useState('');

  const url = `${find_city_url}${city}`;
  const { data, loading = false } = useFetch<City[]>(url, header);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onClickCity = () => {
    console.log(city);
  };

  return (
    <MenuStyled>
      <Input placeholder="Search a city" handleChange={handleChange} />
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {data?.map((city: any) => (
            <ListItem onClick={onClickCity} key={city.id}>
              {city.name}
            </ListItem>
          ))}
        </ul>
      )}
    </MenuStyled>
  );
};

export default Menu;
