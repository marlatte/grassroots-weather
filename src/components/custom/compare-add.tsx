'use client';

import { Plus } from 'react-bootstrap-icons';
import { Button } from '../tremor/Button';
import { useState } from 'react';
import SearchBar from './search-bar';

export default function CompareAddCity({
  compareParam,
}: {
  compareParam?: CompareParam;
}) {
  const [showSearch, setShowSearch] = useState(compareParam === 'a');

  return (
    <div className="flex flex-col self-stretch">
      {showSearch ? (
        <SearchBar {...{ compareParam }} />
      ) : (
        <Button
          className="self-center p-1"
          variant="secondary"
          onClick={() => {
            setShowSearch(true);
          }}
        >
          <Plus className="size-9" />
        </Button>
      )}
    </div>
  );
}
