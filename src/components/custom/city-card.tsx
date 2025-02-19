import type { Dayjs } from 'dayjs';
import { Card } from '../tremor/card';
import Link from 'next/link';

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
    <Card className="p-4 hover:bg-gray-900 focus:bg-gray-900" asChild>
      <Link href={`/${encodeURIComponent(name)}`}>
        <div className="flex justify-between">
          <div className="mb-5">
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
