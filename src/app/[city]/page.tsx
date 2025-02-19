import AddOrRemove from '@/components/custom/add-remove';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'react-bootstrap-icons';

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
    <div className="flex flex-col items-center gap-5 text-xl">
      <div className="flex items-center justify-between self-stretch">
        <Link
          href="/"
          className="flex items-center rounded-full p-1 hover:text-gray-300"
        >
          <span className="sr-only">Home</span>
          <ChevronLeft className="relative -left-0.5 size-7" />
        </Link>
        <AddOrRemove city={data.name} />
      </div>
      <h1 className="text-4xl font-semibold">{data.name}</h1>
      <p className="text-6xl font-light">{data.main.temp.toFixed()}º</p>
      <p className="capitalize">{data.weather[0].description}</p>
      <div className="flex gap-4">
        <p>H: {data.main.temp_max.toFixed()}º</p>
        <p>L: {data.main.temp_min.toFixed()}º</p>
      </div>
    </div>
  );
}
