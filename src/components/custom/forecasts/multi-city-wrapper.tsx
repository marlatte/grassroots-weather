'use client';

import { Card } from '@/components/tremor/Card';
import { Calendar3, Geo } from 'react-bootstrap-icons';
import MultiCityChart from './multi-city-chart';
import { SelectComparison } from './multi-city-dropdown';
import { useState } from 'react';

export default function MultiCityWrapper({
  forecastA,
  forecastB,
}: {
  forecastA?: ForecastResponse;
  forecastB?: ForecastResponse;
}) {
  const [comparison, setComparison] = useState<Comparison>('temp');
  return (
    <Card className="col-span-2 flex min-h-96 flex-col p-4">
      <div className="flex justify-between dark:text-gray-300">
        <h2 className="text-lg">5-Day Forecast</h2>
        <Calendar3 className="size-6" />
      </div>
      <div className="my-3">
        <SelectComparison {...{ comparison, setComparison }} />
      </div>
      {!!forecastA?.list ? (
        <MultiCityChart
          forecastListA={forecastA.list}
          forecastListB={forecastB?.list}
          timezoneOffsetA={forecastA.city.timezone}
          nameA={forecastA?.city.name}
          nameB={forecastB?.city.name}
          {...{ comparison }}
        />
      ) : (
        <div className="grid flex-1 place-content-center gap-4 text-pretty text-center text-xl text-gray-700 dark:text-gray-300">
          <div className="flex justify-center">
            <Geo className="size-8" />
          </div>
          <p>Pick a primary city to compare against.</p>
        </div>
      )}
    </Card>
  );
}
