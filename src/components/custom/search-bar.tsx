'use client';

import { Input } from '@/components/tremor/input';
import { Label } from '@/components/tremor/label';
import { searchCities } from '@/db/mock-db';
import { useState } from 'react';

export default function SearchBar() {
  const [dropdownList, setDropdownList] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const handleQueryChange = (q: string) => {
    setQuery(q);
    setDropdownList(searchCities(q));
  };
  return (
    <div className="relative">
      <Label htmlFor="search" className="">
        <span className="sr-only">Search</span>
        <Input
          placeholder="Search for a city..."
          id="search"
          name="search"
          type="search"
          value={query}
          onChange={(e) => {
            handleQueryChange(e.target.value);
          }}
        />
      </Label>
      {!!dropdownList.length && !dropdownList.includes(query) && (
        <div className="absolute top-12 w-full pl-8">
          <div className="flex flex-col rounded-lg rounded-tl-none border border-gray-800 bg-gray-900 px-1 py-2 text-gray-300">
            {dropdownList.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                className="rounded p-2 text-start hover:bg-gray-800/70 hover:text-gray-200"
                onClick={() => {
                  setQuery(suggestion);
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
