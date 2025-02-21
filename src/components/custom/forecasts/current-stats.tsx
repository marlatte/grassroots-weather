'use client';

import FeelsLike from './feels-like';
import Humidity from './humidity';
import Pressure from './pressure';
import SunRiseAndSet from './sun-rise-set';
import Visibility from './visibility';

export default function CurrentStats({ data }: { data: OpenWeatherCurrent }) {
  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="col-span-2 grid place-content-center rounded-lg bg-gray-700">
        <p className="text-2xl">Wind</p>
      </div>
      <SunRiseAndSet
        sunriseUnix={data.sys.sunrise}
        sunsetUnix={data.sys.sunset}
        timezoneOffset={data.timezone}
      />
      <Humidity humidity={data.main.humidity} />
      <Visibility visibilityMeters={data.visibility} />
      <Pressure pressure={data.main.pressure} />
      <FeelsLike feelsLike={data.main.feels_like} />
    </div>
  );
}
