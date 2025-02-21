'use client';

import { AreaChart } from '@/components/tremor/AreaChart';
import { Card } from '@/components/tremor/Card';
import { getLocalDjs } from '@/lib/date-utils';
import { Calendar3 } from 'react-bootstrap-icons';

export default function SingleCityForecast({
  forecastList,
  timezoneOffset,
}: {
  forecastList: ForecastListItem[];
  timezoneOffset: number;
}) {
  const data = forecastList.map((item) => {
    return {
      time: getLocalDjs(timezoneOffset, item.dt * 1000).format('MMM D, ha'),
      temp: item.main.temp,
    };
  });
  return (
    <Card className="col-span-2 flex min-h-40 flex-col p-4">
      <div className="flex justify-between dark:text-gray-300">
        <h2 className="text-lg">5-Day Forecast</h2>
        <Calendar3 className="size-6" />
      </div>
      <AreaChart
        className="p-1 pt-5"
        data={data}
        index="time"
        categories={['temp']}
        showLegend={false}
        valueFormatter={(number: number) => `${number}º`}
        tickGap={10}
      />
    </Card>
  );
}
