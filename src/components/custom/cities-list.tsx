'use client';

import useLocalStorage from 'use-local-storage';
import CityCard from './city-card';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function CitiesList() {
  const [citiesLocal] = useLocalStorage('cities', '["London", "New York"]');
  const [cityData, setCityData] = useState<{ data: OpenWeatherCity }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCities: string[] = JSON.parse(citiesLocal);
        const responses = await Promise.all(
          fetchCities.map((city) => fetch(`/api/current/${city}`)),
        );
        const allData = await Promise.all(
          responses.map((response) => response.json()),
        );
        setCityData(allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [citiesLocal]);

  const NOW = dayjs().utc();

  return (
    <div className="flex flex-col gap-6">
      {cityData.map((city) => {
        const {
          name,
          main: { temp, temp_max: high, temp_min: low },
          timezone: secFromUTC,
          weather: [{ main: conditions }],
        } = city.data;

        return (
          <CityCard
            key={name}
            {...{ NOW, name, temp, high, low, secFromUTC, conditions }}
          />
        );
      })}
    </div>
  );
}
