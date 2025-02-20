'use client';

import { useEffect, useState } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import useLocalStorage from 'use-local-storage';

function AddCity({
  city,
  onClick,
}: {
  city: string;
  onClick: React.MouseEventHandler;
}) {
  return (
    <button
      type="button"
      className="rounded-full bg-blue-800 hover:bg-blue-700"
      value={city}
      {...{ onClick }}
    >
      <span className="sr-only">Add {city} to Home</span>
      <Plus className="size-10" />
    </button>
  );
}

function RemoveCity({
  city,
  onClick,
}: {
  city: string;
  onClick: React.MouseEventHandler;
}) {
  return (
    <button
      type="button"
      className="rounded-full bg-red-800 hover:bg-red-700"
      {...{ onClick }}
    >
      <span className="sr-only">Remove {city} from Home</span>
      <Dash className="size-10" />
    </button>
  );
}

export default function AddOrRemove({ city }: { city: string }) {
  // TODO: refactor all local storage into one component, pass through React Context
  const [citiesLocal, setCitiesLocal] = useLocalStorage('cities', '[]');
  const [cities, setCities] = useState<string[]>([]);

  const handleAddCity = () => {
    try {
      setCitiesLocal(JSON.stringify([...cities, city]));
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveCity = () => {
    try {
      const newCities = cities.filter((item) => item !== city);
      setCitiesLocal(JSON.stringify(newCities));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      const citiesParsed = JSON.parse(citiesLocal);
      setCities(citiesParsed);
    } catch (err) {
      console.error(err);
    }
  }, [citiesLocal]);

  return cities.includes(city) ? (
    <RemoveCity onClick={handleRemoveCity} {...{ city }} />
  ) : (
    <AddCity onClick={handleAddCity} {...{ city }} />
  );
}
