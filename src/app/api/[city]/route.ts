type Params = {
  city: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const { city } = context.params;
  const apiKey = process.env.API_KEY;

  // ! Searching by city is deprecated.
  // TODO: Replace with Geocoder API, then search by coordinates.
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  );

  // TODO: Add error handling

  const data = await response.json();
  return Response.json({ data });
}
