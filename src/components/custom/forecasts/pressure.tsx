import { Card } from '@/components/tremor/Card';
import { DonutChart } from '@/components/tremor/DonutChart';
import { CloudArrowDown } from 'react-bootstrap-icons';

export default function Pressure({ pressure }: { pressure: number }) {
  // Low: 980 => 0
  // Mid: 1010 => 30
  // High: 1040 => 60
  const high = 1040;
  const low = 980;
  const range = high - low;

  let pressureAdj: number;
  if (pressure > high) pressureAdj = high;
  else if (pressure < low) pressureAdj = low;
  else pressureAdj = pressure;

  const pressureRatio = pressureAdj - low;

  const data = [
    { key: 'blue', value: pressureRatio },
    { key: 'gray', value: range - pressureRatio },
    { key: 'transparent', value: 40 },
  ];
  return (
    <Card className="flex flex-col p-4">
      <div className="flex items-center justify-between dark:text-gray-300">
        <h2 className="text-lg">Pressure</h2>
        <CloudArrowDown className="hidden size-5 min-[360px]:block" />
      </div>
      <div className="relative overflow-hidden">
        <DonutChart
          data={data}
          category="key"
          value="value"
          colors={['cyan', 'gray', 'transparent']}
          showTooltip={false}
          className="relative top-[14px] h-min w-full -rotate-[107deg]"
          chartClassName="stroke-transparent dark:stroke-transparent"
        />
        <div className="absolute bottom-0 grid h-1/2 w-full place-content-center">
          <div className="text-center">
            <p className="text-xl font-semibold min-[360px]:text-2xl">
              {pressure}
            </p>
            <p>hPa</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
