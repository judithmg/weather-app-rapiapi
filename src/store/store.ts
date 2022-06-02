import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { City } from './../types/weather';

type Store = {
  cities: City[];
  addCity: (city: City) => void;
  setCity: (city: City) => void;
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        cities: [],
        addCity: (city: City) => {
          set((state) => ({
            ...state,
            cities: [...state.cities, city],
          }));
        },
        setCity: (city: City) => {
          set((state) => {
            state.cities.filter((item) => item.id !== city.id);
            return {
              ...state,
              cities: [...state.cities, city],
            };
          });
        },
      }),
      {
        name: 'weather-state',
      },
    ),
  ),
);

export default useStore;
