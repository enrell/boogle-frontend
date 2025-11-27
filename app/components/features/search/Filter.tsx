interface FilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function Filter({ value, onChange }: FilterProps) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-boogle-dark-lighter text-gray-900
         dark:text-gray-100 rounded-md px-3 py-2 outline-none focus:border-grey-500 dark:focus:border-gray-400'>
        <option value="all">All</option>
        <option value="title">Title</option>
    </select>
  );
} 