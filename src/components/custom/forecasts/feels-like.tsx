import { Card } from '@/components/tremor/Card';
import { ThermometerHalf } from 'react-bootstrap-icons';

export default function FeelsLike({ feelsLike }: { feelsLike: number }) {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex items-center justify-between dark:text-gray-300">
        <h2 className="text-lg">Feels Like</h2>
        <ThermometerHalf className="hidden size-5 min-[360px]:block" />
      </div>
      <div className="flex flex-1 items-center text-4xl font-semibold">
        <p className="flex items-start">
          {Math.round(feelsLike)}
          <span className="text-3xl font-light">º</span>
        </p>
      </div>
    </Card>
  );
}
