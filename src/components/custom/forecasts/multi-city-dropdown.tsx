import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/tremor/Select';

export function SelectComparison({
  comparison,
  setComparison,
}: {
  comparison: Comparison;
  setComparison: React.Dispatch<React.SetStateAction<Comparison>>;
}) {
  const data: { value: Comparison; label: string }[] = [
    {
      value: 'temp',
      label: 'Temperature',
    },
    {
      value: 'humidity',
      label: 'Humidity',
    },
    {
      value: 'feels_like',
      label: 'Feels Like',
    },
  ];

  return (
    <Select
      value={comparison}
      onValueChange={(val: Comparison) => {
        setComparison(val);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
