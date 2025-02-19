'use client';

import { Input } from '@/components/tremor/input';
import { Label } from '@/components/tremor/label';

export default function SearchBar() {
  return (
    <div className="">
      <Label htmlFor="search" className="">
        <span className="sr-only">Search</span>
        <Input
          placeholder="Search for a city..."
          id="search"
          name="search"
          type="search"
        />
      </Label>
    </div>
  );
}
