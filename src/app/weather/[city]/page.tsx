import AddOrRemove from '@/components/custom/add-remove';
import BackBtn from '@/components/custom/back-btn';
import SingleCityForecast from '@/components/custom/forecasts/single-city';
import HomeLink from '@/components/custom/home-link';
import { appendCompareParam } from '@/lib/link-utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CurrentStats from '@/components/custom/forecasts/current-stats';

type Params = {
  city: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const { city } = params;
  return {
    title: `${decodeURIComponent(city)} | Weather`,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { city } = params;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  const resCurrent = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
  );
  if (!resCurrent.ok) {
    if (resCurrent.status === 404) {
      notFound();
    } else {
      throw new Error(`${resCurrent.status}: ${await resCurrent.text()}`);
    }
  }

  const currentData: OpenWeatherCurrent = await resCurrent.json();

  const resForecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
  );
  if (!resForecast.ok) {
    if (resForecast.status === 404) {
      notFound();
    } else {
      throw new Error(`${resForecast.status}: ${await resForecast.text()}`);
    }
  }

  const forecastData: ForecastResponse = await resForecast.json();

  // Find more assets (icons, etc.) for the UI here:
  // https://openweathermap.org/weather-conditions

  return (
    <div className="w-[min(100%,_750px)] self-center">
      <section className="flex flex-col items-center gap-5 text-center text-xl">
        <div className="mb-6 flex items-center justify-between self-stretch">
          <BackBtn />
          <HomeLink />
          <AddOrRemove city={currentData.name} />
        </div>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          {currentData.name}
        </h1>
        <p className="flex text-6xl font-light">
          <span className="w-4" />
          {currentData.main.temp.toFixed()}
          <span className="text-4xl">º</span>
        </p>
        <p className="capitalize">{currentData.weather[0].description}</p>
        <div className="flex gap-4">
          <p>H: {currentData.main.temp_max.toFixed()}º</p>
          <p>L: {currentData.main.temp_min.toFixed()}º</p>
        </div>
      </section>
      <section className="mt-5 flex flex-col gap-2">
        <Link
          href={appendCompareParam('a', city)}
          className="self-end hover:opacity-90"
        >
          Compare
        </Link>
        <div className="flex flex-col gap-5">
          <SingleCityForecast
            forecastList={forecastData.list}
            timezoneOffset={forecastData.city.timezone}
          />
          <CurrentStats data={currentData} />
        </div>
      </section>
    </div>
  );
}
