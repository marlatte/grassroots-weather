import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function getHourRounded(timeDjs: Dayjs) {
  return Math.round(+(timeDjs.minute() / 60).toFixed(2) + timeDjs.hour());
}

export function getLocalDjs(timezoneOffset: number, epochMilSec?: number) {
  return dayjs.utc(epochMilSec).add(timezoneOffset, 'seconds');
}
