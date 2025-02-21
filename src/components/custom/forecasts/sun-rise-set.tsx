import { Card } from '@/components/tremor/Card';
import { CategoryBar } from '@/components/tremor/CategoryBar';
import { getHourRounded, getLocalDjs } from '@/lib/date-utils';
import { Sunrise, Sunset } from 'react-bootstrap-icons';

export default function SunRiseAndSet({
  sunriseUnix,
  sunsetUnix,
  timezoneOffset,
}: {
  sunriseUnix: number;
  sunsetUnix: number;
  timezoneOffset: number;
}) {
  // Round to the nearest hour because Tremor's CategoryBar displays floats, not times
  // TODO: Modify tremor component to handle minutes instead of just numbers

  const sunriseDjs = getLocalDjs(timezoneOffset, sunriseUnix * 1000);
  const sunriseHourRounded = getHourRounded(sunriseDjs);

  const sunsetDjs = getLocalDjs(timezoneOffset, sunsetUnix * 1000);
  const sunsetHourRounded = getHourRounded(sunsetDjs);

  const nowDjs = getLocalDjs(timezoneOffset);
  const nowHourRounded = getHourRounded(nowDjs);

  const daylightInterval = sunsetHourRounded - sunriseHourRounded;

  return (
    <Card className="col-span-2 flex min-h-40 flex-col p-4">
      <div className="flex justify-between dark:text-gray-300">
        <h2 className="text-lg">Sunrise & Sunset</h2>
        {nowHourRounded < 12 ? (
          <Sunrise className="size-7" />
        ) : (
          <Sunset className="size-7" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center pb-6">
        <CategoryBar
          values={[
            sunriseHourRounded,
            daylightInterval,
            24 - sunsetHourRounded,
          ]}
          marker={{
            value: nowHourRounded,
            tooltip: nowDjs.format('H:mm'),
            showAnimation: true,
          }}
          colors={['blue_dark', 'yellow', 'indigo_dark']}
          className="max-w-sm"
        />
      </div>
    </Card>
  );
}
