import BackBtn from '@/components/custom/back-btn';
import CompareAddCity from '@/components/custom/compare-add';
import CompareCard from '@/components/custom/compare-card';
import MultiCityWrapper from '@/components/custom/forecasts/multi-city-wrapper';
import HomeLink from '@/components/custom/home-link';

type SearchParams = { [key: string]: string | undefined };

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { a, b } = searchParams;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const dataA: {
    current?: OpenWeatherCurrent;
    forecast?: ForecastResponse;
  } = {};
  const dataB: {
    current?: OpenWeatherCurrent;
    forecast?: ForecastResponse;
  } = {};

  if (a) {
    const currentResA = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${apiKey}&units=imperial`,
    );
    if (!currentResA.ok) {
      if (currentResA.status === 404) {
        //  TODO: Add better error handling
      } else {
        throw new Error(`${currentResA.status}: ${await currentResA.text()}`);
      }
    }
    dataA.current = await currentResA.json();

    const forecastResA = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${a}&appid=${apiKey}&units=imperial`,
    );
    if (!forecastResA.ok) {
      if (forecastResA.status === 404) {
        //  TODO: Add better error handling
      } else {
        throw new Error(`${forecastResA.status}: ${await forecastResA.text()}`);
      }
    }
    dataA.forecast = await forecastResA.json();
  }

  if (b) {
    const currentResB = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=${apiKey}&units=imperial`,
    );
    if (!currentResB.ok) {
      if (currentResB.status === 404) {
        //  TODO: Add better error handling
      } else {
        throw new Error(`${currentResB.status}: ${await currentResB.text()}`);
      }
    }
    dataB.current = await currentResB.json();

    const forecastResB = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${b}&appid=${apiKey}&units=imperial`,
    );
    if (!forecastResB.ok) {
      if (forecastResB.status === 404) {
        //  TODO: Add better error handling
      } else {
        throw new Error(`${forecastResB.status}: ${await forecastResB.text()}`);
      }
    }
    dataB.forecast = await forecastResB.json();
  }

  return (
    <div className="flex w-[min(100%,_750px)] flex-col gap-10 self-center">
      <section className="flex flex-col gap-5">
        <div className="mb-2 flex items-center justify-between self-stretch">
          <BackBtn />
          <HomeLink />
          <div className="size-9" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-9">
          <div className="flex sm:col-span-4">
            {dataA.current ? (
              <CompareCard
                name={dataA.current.name}
                temp={dataA.current.main.temp}
                conditions={dataA.current.weather[0].main}
                high={dataA.current.main.temp_max}
                low={dataA.current.main.temp_min}
                secFromUTC={dataA.current.timezone}
                compareParam="a"
                className="bg-blue-600 text-blue-100 hover:bg-blue-900 dark:bg-blue-950"
              />
            ) : (
              <CompareAddCity compareParam="a" />
            )}
          </div>
          <p className="grid place-content-center text-center text-2xl">vs.</p>
          <div className="flex sm:col-span-4">
            {dataB.current ? (
              <CompareCard
                name={dataB.current.name}
                temp={dataB.current.main.temp}
                conditions={dataB.current.weather[0].main}
                high={dataB.current.main.temp_max}
                low={dataB.current.main.temp_min}
                secFromUTC={dataB.current.timezone}
                compareParam="b"
                className="bg-red-600 text-red-100 hover:bg-red-900 dark:bg-red-950"
              />
            ) : (
              <CompareAddCity compareParam="b" disabled={!dataA.current} />
            )}
          </div>
        </div>
      </section>
      <section>
        <MultiCityWrapper
          forecastA={dataA.forecast}
          forecastB={dataB.forecast}
        />
      </section>
    </div>
  );
}
