import { Logo } from "../ui/Logo";
import { SearchBar } from "../features/search/SearchBar";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useState } from "react";
import { Filter } from "../features/search/Filter";
import { useSearchParams } from "react-router";

interface HeaderProps {
  query?: string;
}

export function Header({ query }: HeaderProps) {
  const [searchParams] = useSearchParams(); 
  const initialFilter = searchParams.get("filter") || "all"; 
  const [filter, setFilter] = useState(initialFilter); 

  return (
    <header className="flex flex-col-reverse sm:items-center sm:flex-row p-4 border-b border-gray-200 dark:border-gray-600 gap-8 sticky top-0 bg-white dark:bg-boogle-dark z-10">
      <div className="flex items-center gap-5 w-full">
        <Logo size="small" />
        <div className="flex-1">
          <SearchBar defaultValue={query} variant="header" filter={filter} onFilterChange={setFilter} />
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">

        <Filter
          value={filter}
          onChange={setFilter}
        />
        <ThemeToggle />
      </div>
    </header>
  );
}
