type Params = {
  city: string;
};

export default async function Page({ params }: { params: Params }) {
  const { city } = params;
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
  );
  if (!res.ok) {
    throw new Error(`${res.status}: ${await res.text()}`);
  }

  const data: OpenWeatherCity = await res.json();

  // Find more assets (icons, etc.) for the UI here:
  // https://openweathermap.org/weather-conditions

  return (
    <div className="flex flex-col items-center gap-5 pt-5 text-xl">
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
