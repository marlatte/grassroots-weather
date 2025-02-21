'use client';

import { cx } from '@/lib/tremorUtils';
import { Card } from '../tremor/Card';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useRouter, useSearchParams } from 'next/navigation';
import { deleteCompareParam } from '@/lib/link-utils';

dayjs.extend(utc);

export default function CompareCard({
  name,
  temp,
  secFromUTC,
  conditions,
  high,
  low,
  compareParam,
  className,
}: {
  name: string;
  temp: number;
  secFromUTC: number;
  conditions: string;
  high: number;
  low: number;
  compareParam: CompareParam;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const localTime = dayjs().utc().add(secFromUTC, 's').format('h:mm A');

  return (
    <Card
      className={cx(
        'flex min-h-32 flex-col justify-between gap-2 p-4 text-base hover:bg-gray-900',
        className,
      )}
      asChild
    >
      <button
        type="button"
        onClick={() => {
          router.push(deleteCompareParam(compareParam, searchParams));
        }}
      >
        <div className="flex justify-between">
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
      </button>
    </Card>
  );
}
