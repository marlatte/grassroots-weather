import AddOrRemove from '@/components/custom/add-remove';
import BackBtn from '@/components/custom/back-btn';
import HomeLink from '@/components/custom/home-link';
import { appendCompareParam } from '@/lib/link-utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
  );
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    } else {
      throw new Error(`${res.status}: ${await res.text()}`);
    }
  }

  const data: OpenWeatherCity = await res.json();

  // Find more assets (icons, etc.) for the UI here:
  // https://openweathermap.org/weather-conditions

  return (
    <div className="w-[min(100%,_750px)] self-center">
      <section className="flex flex-col items-center gap-5 text-xl">
        <div className="mb-6 flex items-center justify-between self-stretch">
          <BackBtn />
          <HomeLink />
          <AddOrRemove city={data.name} />
        </div>
        <h1 className="text-4xl font-semibold sm:text-5xl">{data.name}</h1>
        <p className="text-6xl font-light">{data.main.temp.toFixed()}º</p>
        <p className="capitalize">{data.weather[0].description}</p>
        <div className="flex gap-4">
          <p>H: {data.main.temp_max.toFixed()}º</p>
          <p>L: {data.main.temp_min.toFixed()}º</p>
        </div>
      </section>
      <section className="flex flex-col">
        <Link
          href={appendCompareParam('a', city)}
          className="self-end hover:opacity-90"
        >
          Compare
        </Link>
        <div className="bg-gray-700">Forcast</div>
      </section>
    </div>
  );
}
