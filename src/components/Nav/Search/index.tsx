import { ChangeEvent, useEffect, useState } from 'react';
import { ImSpinner } from 'react-icons/im';
import Menu from 'src/components/Nav/Menu';
import { find_city_url, headers } from 'src/constants/api';
import * as Colors from 'src/constants/colors';
import useFetch from 'src/hooks/useFetch';
import useStore from 'src/store/store';
import { City } from 'src/types/weather';
import styled from 'styled-components';

import Input from '../../Input';
import { Props } from './types';

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

const Search: React.FC<Props> = ({ setSearch }) => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState<City[]>([]);

  const addCity = useStore((state) => state.setCity);

  const url = `${find_city_url}${city}`;
  const { data, loading = false } = useFetch<City[]>(url, headers);

  useEffect(() => {
    data && setResult(data?.slice(0, 5));
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onClickCity = (city: City) => {
    addCity(city);
    setSearch(false);
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
              <ListItem onClick={() => onClickCity(city)} key={index}>
                <p>{city.name}</p>
              </ListItem>
            ))}
          </ul>
        );
      } else return <p>No result</p>;
    } else return null;
  };

  return (
    <Menu>
      <Input placeholder="Search a city" handleChange={handleChange} />
      {renderResult()}
    </Menu>
  );
};

export default Search;
