import { Card } from '@/components/tremor/card';
import { CloudArrowDown } from 'react-bootstrap-icons';

export default function Pressure({ pressure }: { pressure: number }) {
  // Low: 980
  // High: 1040
  // Mid: 1010

  return (
    <Card className="flex flex-col p-4">
      <div className="flex items-center justify-between dark:text-gray-300">
        <h2 className="text-lg">Pressure</h2>
        <CloudArrowDown className="hidden size-5 min-[360px]:block" />
      </div>
      <p className="flex flex-1 flex-col justify-center text-3xl font-semibold">
        {Math.round(pressure)} <span className="text-2xl font-light">hPa</span>
      </p>
    </Card>
  );
}
