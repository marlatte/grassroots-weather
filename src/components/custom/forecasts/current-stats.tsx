'use client';

import FeelsLike from './feels-like';
import Humidity from './humidity';
import Pressure from './pressure';
import SunRiseAndSet from './sun-rise-set';
import Visibility from './visibility';
import WindStats from './wind';

export default function CurrentStats({ data }: { data: OpenWeatherCurrent }) {
  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-5 sm:grid-cols-4">
      <WindStats
        speed={data.wind.speed}
        gust={data.wind.gust}
        deg={data.wind.deg}
      />
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
