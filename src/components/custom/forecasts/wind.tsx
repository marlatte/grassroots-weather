import { Card } from '@/components/tremor/Card';
import { ChevronDown, Wind } from 'react-bootstrap-icons';

export default function WindStats({
  speed,
  deg,
  gust,
}: {
  speed: number;
  deg: number;
  gust?: number;
}) {
  const degRounded = Math.round(deg);
  const pairs = [
    { direction: 360, letterCode: 'N' },
    { direction: 315, letterCode: 'NW' },
    { direction: 270, letterCode: 'W' },
    { direction: 225, letterCode: 'SW' },
    { direction: 180, letterCode: 'S' },
    { direction: 135, letterCode: 'SE' },
    { direction: 90, letterCode: 'E' },
    { direction: 45, letterCode: 'NE' },
    { direction: 0, letterCode: 'N' },
  ];
  const offset = 22.5;
  const { letterCode } = pairs.find(
    ({ direction }) => degRounded + offset > direction,
  ) || { letterCode: 'N' };

  return (
    <Card className="col-span-2 flex min-h-40 flex-col p-4">
      <div className="flex justify-between dark:text-gray-300">
        <h2 className="text-lg">Wind</h2>
        <Wind className="size-6" />
      </div>
      <div className="flex flex-1 gap-5">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center gap-3">
            <div className="text-4xl font-semibold">{Math.round(speed)}</div>{' '}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">MPH</span>
              <span className="text-sm font-semibold">Speed</span>
            </div>
          </div>
          {gust && (
            <>
              <div className="h-px bg-gray-600" />
              <div className="flex flex-1 items-center gap-3">
                <div className="text-4xl font-semibold">{Math.round(gust)}</div>{' '}
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">MPH</span>
                  <span className="text-sm font-semibold">Gust</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="relative grid w-32 place-content-center">
          <div className="wind-compass size-28 rounded-full" />
          <div className="absolute grid size-full place-content-center">
            <div className="size-[100px] rounded-full bg-[#090E1A]" />
          </div>
          <div className="absolute grid size-full place-content-center">
            <div
              className="relative flex h-28 flex-col items-center"
              style={{ rotate: `${degRounded}deg` }}
            >
              <div className="size-2 rounded-full ring-2 ring-gray-300" />
              <div className="w-0.5 flex-1 rounded-full bg-gray-300" />
              <ChevronDown className="absolute -bottom-3 size-8 shrink-0 text-gray-300" />
            </div>
          </div>
          <div className="absolute grid size-full place-content-center">
            <div className="grid size-[50px] place-content-center rounded-full bg-[#090E1A] text-center text-2xl font-semibold">
              {letterCode}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
