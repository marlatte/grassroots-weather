'use client';

import { Input } from '@/components/tremor/Input';
import { Label } from '@/components/tremor/Label';
import { searchCities } from '@/db/mock-db';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../tremor/Button';
import { ArrowRight } from 'react-bootstrap-icons';
import { appendCompareParam, getWeatherLink } from '@/lib/link-utils';

export default function SearchBar({
  compareParam,
}: {
  compareParam?: CompareParam;
}) {
  const [dropdownList, setDropdownList] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleQueryChange = (q: string) => {
    setQuery(q);
    setDropdownList(searchCities(q));
  };
  return (
    <form
      action={() => {
        router.push(
          compareParam
            ? appendCompareParam(compareParam, query, searchParams)
            : getWeatherLink(query),
        );
      }}
      className="relative flex rounded-lg border border-gray-800"
    >
      <Label htmlFor="search" className="flex-1">
        <span className="sr-only">Search</span>
        <Input
          placeholder="Search for a city..."
          id="search"
          name="search"
          type="search"
          autoComplete="off"
          value={query}
          className=""
          inputClassName="border-0 bg-transparent rounded-r-none"
          onChange={(e) => {
            handleQueryChange(e.target.value);
          }}
        />
      </Label>
      <Button
        variant="light"
        type="submit"
        disabled={!query}
        className="rounded-l-none"
      >
        <span className="sr-only">Search</span>
        <ArrowRight />
      </Button>
      {!!dropdownList.length && !dropdownList.includes(query) && (
        <div className="absolute top-12 z-10 w-full pl-8">
          <div className="flex flex-col rounded-lg rounded-tl-none border border-gray-800 bg-gray-900 px-1 py-2 text-gray-300">
            {dropdownList.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                className="rounded p-2 text-start hover:bg-gray-800/70 hover:text-gray-200"
                onClick={() => {
                  setQuery(suggestion);
                  // ? Can return focus to input after clicking dropdown item?
                  // ? Can move through dropdown with up/down arrows?
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}
