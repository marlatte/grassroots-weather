'use client';

import SearchBar from './search-bar';

export default function CompareAddCity({
  compareParam,
  disabled,
}: {
  compareParam?: CompareParam;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center self-stretch">
      <SearchBar {...{ compareParam, disabled }} />
    </div>
  );
}
