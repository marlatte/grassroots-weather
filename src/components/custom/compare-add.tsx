'use client';

import { Plus } from 'react-bootstrap-icons';
import { Button } from '../tremor/Button';
import { useState } from 'react';
import SearchBar from './search-bar';
import { cx } from '@/lib/tremorUtils';

export default function CompareAddCity({
  compareParam,
  disabled,
}: {
  compareParam?: CompareParam;
  disabled?: boolean;
}) {
  const [showSearch, setShowSearch] = useState(compareParam === 'a');

  return (
    <div className="flex flex-col self-stretch">
      {showSearch ? (
        <SearchBar {...{ compareParam }} />
      ) : (
        <Button
          className={cx('self-center p-1', { 'animate-pulse': !disabled })}
          variant="secondary"
          onClick={() => {
            setShowSearch(true);
          }}
          {...{ disabled }}
        >
          <Plus className="size-9" />
        </Button>
      )}
    </div>
  );
}
