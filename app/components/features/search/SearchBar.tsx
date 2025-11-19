import { Form } from "react-router";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  defaultValue?: string;
  variant?: "centered" | "header";
}

export function SearchBar({ defaultValue = "", variant = "centered" }: SearchBarProps) {
  const isHeader = variant === "header";
  const [query, setQuery] = useState(defaultValue);

  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);
  
  return (
    <Form action="/search" className={`w-full ${isHeader ? "max-w-2xl" : "max-w-2xl"}`}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <IoSearch className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for free books..."
          className={`w-full pl-12 pr-4 ${isHeader ? "py-2" : "py-3"} rounded-full border border-gray-200 dark:border-gray-100 bg-white dark:bg-boogle-dark-lighter text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 hover:shadow-md focus:shadow-md outline-none focus:border-gray-200 dark:focus:border-gray-500 transition-all text-lg`}
        />
      </div>
      {!isHeader && (
        <div className="flex justify-center gap-3 mt-8">
          <button type="submit" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-boogle-dark-lighter dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded border border-transparent hover:border-gray-200 dark:hover:border-gray-500 text-sm font-medium transition-colors outline-none focus:border-gray-300 dark:focus:border-gray-500">
            Boogle Search
          </button>
          <button type="button" className="px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-boogle-dark-lighter dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded border border-transparent hover:border-gray-200 dark:hover:border-gray-500 text-sm font-medium transition-colors outline-none focus:border-gray-300 dark:focus:border-gray-500">
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </Form>
  );
}
