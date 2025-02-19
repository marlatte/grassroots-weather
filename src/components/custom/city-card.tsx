import dayjs from 'dayjs';
import { Card } from '../tremor/card';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function CityCard({
  name,
  temp,
  secFromUTC,
  conditions,
  high,
  low,
}: {
  name: string;
  temp: number;
  secFromUTC: number;
  conditions: string;
  high: number;
  low: number;
}) {
  const currentTime = dayjs().utc().add(secFromUTC).format('H:mm A');
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div className="mb-5">
          <p className="mb-0.5 text-2xl font-semibold">{name}</p>
          <p className="opacity-90">{currentTime}</p>
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
    </Card>
  );
}
