'use client';

import SunRiseAndSet from './sun-rise-set';

export default function CurrentStats({ data }: { data: OpenWeatherCurrent }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="col-span-2 grid h-40 place-content-center rounded-lg bg-gray-700">
        <p className="text-2xl">Wind</p>
      </div>
      <div className="col-span-2">
        <SunRiseAndSet
          sunriseUnix={data.sys.sunrise}
          sunsetUnix={data.sys.sunset}
          timezoneOffset={data.timezone}
        />
      </div>
      <div className="grid h-40 place-content-center rounded-lg bg-gray-700">
        <p className="text-lg">Humidity</p>
      </div>
    </div>
  );
}
