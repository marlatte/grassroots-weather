export default function WindSunHumidity() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="col-span-2 grid h-40 place-content-center rounded-lg bg-gray-700">
        <p className="text-2xl">Wind</p>
      </div>
      <div className="grid h-40 place-content-center rounded-lg bg-gray-700">
        <p className="text-lg">Sunrise/set</p>
      </div>
      <div className="grid h-40 place-content-center rounded-lg bg-gray-700">
        <p className="text-lg">Humidity</p>
      </div>
    </div>
  );
}
