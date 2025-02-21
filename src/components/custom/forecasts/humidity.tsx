import { Card } from '@/components/tremor/card';
import { Moisture } from 'react-bootstrap-icons';

export default function Humidity({ humidity }: { humidity: number }) {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex items-center justify-between dark:text-gray-300">
        <h2 className="text-lg">Humidity</h2>
        <Moisture className="hidden size-5 min-[360px]:block" />
      </div>
      <div className="flex flex-1 items-center text-4xl font-semibold">
        <p className="flex items-end">
          {Math.round(humidity)}
          <span className="text-3xl font-normal">%</span>
        </p>
      </div>
    </Card>
  );
}
