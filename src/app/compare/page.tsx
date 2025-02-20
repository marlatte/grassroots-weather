import BackBtn from '@/components/custom/back-btn';
import CompareAddCity from '@/components/custom/compare-add';
import CompareCard from '@/components/custom/compare-card';
import HomeLink from '@/components/custom/home-link';

type SearchParams = { [key: string]: string | undefined };

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { a, b } = searchParams;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  let dataA: OpenWeatherCity | undefined;
  let dataB: OpenWeatherCity | undefined;

  if (a) {
    const responseA = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${apiKey}&units=imperial`,
    );
    if (!responseA.ok) {
      if (responseA.status === 404) {
      } else {
        throw new Error(`${responseA.status}: ${await responseA.text()}`);
      }
    }
    dataA = await responseA.json();
  }

  if (b) {
    const responseB = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=${apiKey}&units=imperial`,
    );
    if (!responseB.ok) {
      if (responseB.status === 404) {
      } else {
        throw new Error(`${responseB.status}: ${await responseB.text()}`);
      }
    }
    dataB = await responseB.json();
  }

  return (
    <div className="w-[min(100%,_750px)] self-center">
      <section className="flex flex-col items-center gap-5">
        <div className="mb-2 flex items-center justify-between self-stretch">
          <BackBtn />
          <HomeLink />
          <div className="size-9" />
        </div>
        {dataA ? (
          <CompareCard
            name={dataA.name}
            temp={dataA.main.temp}
            conditions={dataA.weather[0].main}
            high={dataA.main.temp_max}
            low={dataA.main.temp_min}
            secFromUTC={dataA.timezone}
            compareParam="a"
            className="hover:bg-blue-900 dark:bg-blue-950 dark:text-blue-100"
          />
        ) : (
          <CompareAddCity compareParam="a" />
        )}
        {dataB ? (
          <>
            <p className="text-2xl">vs.</p>
            <CompareCard
              name={dataB.name}
              temp={dataB.main.temp}
              conditions={dataB.weather[0].main}
              high={dataB.main.temp_max}
              low={dataB.main.temp_min}
              secFromUTC={dataB.timezone}
              compareParam="b"
              className="hover:bg-red-900 dark:bg-red-950 dark:text-red-100"
            />
          </>
        ) : (
          <CompareAddCity compareParam="b" />
        )}
      </section>
    </div>
  );
}
