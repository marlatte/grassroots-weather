import type { Dayjs } from 'dayjs';
import { Card } from '../tremor/Card';
import Link from 'next/link';
import { getWeatherLink } from '@/lib/link-utils';

export default function CityCard({
  NOW,
  name,
  temp,
  secFromUTC,
  conditions,
  high,
  low,
}: {
  NOW: Dayjs;
  name: string;
  temp: number;
  secFromUTC: number;
  conditions: string;
  high: number;
  low: number;
}) {
  const localTime = NOW.add(secFromUTC, 's').format('h:mm A');

  return (
    <Card
      className="flex min-h-32 flex-col justify-between gap-2 p-4 text-base hover:bg-gray-50 focus:bg-gray-50 hover:dark:bg-gray-900 focus:dark:bg-gray-900"
      asChild
    >
      <Link href={getWeatherLink(name)}>
        <div className="flex justify-between gap-2">
          <div>
            <p className="mb-0.5 text-2xl font-semibold">{name}</p>
            <p className="opacity-90">{localTime}</p>
          </div>
          <p className="flex items-start text-5xl font-light">
            {temp.toFixed()}
            <span className="text-4xl">º</span>
          </p>
        </div>
        <div className="flex justify-between opacity-90">
          <p>{conditions}</p>
          <div className="flex gap-3">
            <p>H: {high.toFixed()}º</p>
            <p>L: {low.toFixed()}º</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
