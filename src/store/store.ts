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
            const newState = state.cities.filter(
              (item) => item.name !== city.name,
            );
            return {
              ...state,
              cities: [...newState, city],
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
