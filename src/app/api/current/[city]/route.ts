type Params = {
  city: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const { city } = context.params;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  // ! Searching by city is deprecated.
  // TODO: Replace with Geocoder API, then search by coordinates.
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
  );

  if (!res.ok) {
    throw new Error(`${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  return Response.json({ data });
}
