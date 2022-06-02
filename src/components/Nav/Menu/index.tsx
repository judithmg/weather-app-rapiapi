import { ChangeEvent, useEffect, useState } from 'react';
import { ImSpinner } from 'react-icons/im';
import { find_city_url, header } from 'src/constants/api';
import * as Colors from 'src/constants/colors';
import useFetch from 'src/hooks/useFetch';
import useStore from 'src/store/store';
import styled from 'styled-components';

import Input from '../../Input';

const MenuStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50px;
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
  cursor: pointer;
  text-align: center;
  color: ${Colors.white};
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid ${Colors.white};
`;

const Loading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 5px;
  }
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
  const [result, setResult] = useState<City[]>([]);

  const addCity = useStore((state) => state.addCity);

  const url = `${find_city_url}${city}`;
  const { data, loading = false } = useFetch<City[]>(url, header);

  useEffect(() => {
    data && setResult(data?.slice(0, 5));
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onClickCity = (name: string) => {
    addCity(name);
  };

  const renderResult = () => {
    if (city.length) {
      if (loading) {
        return (
          <Loading>
            <p>Loading...</p>
            <ImSpinner color={Colors.white} />
          </Loading>
        );
      }
      if (result.length) {
        return (
          <ul>
            {result.map((city: City, index: number) => (
              <ListItem onClick={() => onClickCity(city.url)} key={index}>
                <p>{city.name}</p>
              </ListItem>
            ))}
          </ul>
        );
      } else return <p>No result</p>;
    } else return null;
  };

  return (
    <MenuStyled>
      <Input placeholder="Search a city" handleChange={handleChange} />
      {renderResult()}
    </MenuStyled>
  );
};

export default Menu;
