import { ReadonlyURLSearchParams } from 'next/navigation';

export function getWeatherLink(city: string) {
  return `/weather/${encodeURIComponent(city)}`;
}

export function appendCompareParam(
  name: string,
  value: string,
  currentParams?: ReadonlyURLSearchParams,
) {
  const params = new URLSearchParams(currentParams);
  params.append(name, value);

  return `/compare?${params.toString()}`;
}

export function deleteCompareParam(
  name: string,
  currentParams?: ReadonlyURLSearchParams,
) {
  const params = new URLSearchParams(currentParams);
  params.delete(name);

  return `/compare?${params.toString()}`;
}
