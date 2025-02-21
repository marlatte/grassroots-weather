'use client';

import { AreaChart } from '@/components/tremor/AreaChart';
import { getLocalDjs } from '@/lib/date-utils';

export default function MultiCityChart({
  forecastListA,
  forecastListB,
  nameA,
  nameB,
  timezoneOffsetA,
  comparison,
}: {
  forecastListA: ForecastListItem[];
  forecastListB?: ForecastListItem[];
  timezoneOffsetA: number;
  nameA: string;
  nameB?: string;
  comparison: Comparison;
}) {
  const data = forecastListA.map((item, index) => {
    const datapoint: Record<string, string | number> = {
      time: getLocalDjs(timezoneOffsetA, item.dt * 1000).format('MMM D, ha'),
    };
    datapoint[nameA] = item.main[comparison];
    if (forecastListB && nameB) {
      datapoint[nameB] = forecastListB[index].main[comparison];
    }
    return datapoint;
  });

  const categories = [];
  if (nameA) categories.push(nameA);
  if (nameB) categories.push(nameB);

  return (
    <AreaChart
      className="p-1 pt-5"
      data={data}
      index="time"
      {...{ categories }}
      showLegend={false}
      valueFormatter={(number: number) => {
        return comparison === 'humidity' ? `${number}%` : `${number}º`;
      }}
      tickGap={10}
      colors={['blue', 'red_dark']}
    />
  );
}
