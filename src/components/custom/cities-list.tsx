'use client';

import useLocalStorage from 'use-local-storage';
import CityCard from './city-card';

export default function CitiesList() {
  const [citiesStored, setCitiesStored] = useLocalStorage('cities', '');

  let cities: string[] = [];

  try {
    cities = JSON.parse(citiesStored);
  } catch (err) {
    console.error(err);
  }

  const handleSearch = () => {
    try {
      setCitiesStored(JSON.stringify(['London', 'New York']));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {cities.map((city) => (
        <CityCard
          key={city}
          name={city}
          conditions="Clouds"
          temp={55}
          high={60}
          low={50}
          secFromUTC={0}
        />
      ))}
    </div>
  );
}
