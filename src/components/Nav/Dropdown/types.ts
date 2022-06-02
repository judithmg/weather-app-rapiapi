import { City } from 'src/types/weather';

export interface Props {
  cities: City[];
  setDropdown: (value: boolean) => void;
}
