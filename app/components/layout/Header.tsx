import { Logo } from "../ui/Logo";
import { SearchBar } from "../features/search/SearchBar";
import { Link } from "react-router";
import { ThemeToggle } from "../ui/ThemeToggle";

interface HeaderProps {
  query?: string;
}

export function Header({ query }: HeaderProps) {
  return (
    <header className="flex items-center p-4 border-b border-gray-200 dark:border-gray-600 gap-8 sticky top-0 bg-white dark:bg-boogle-dark z-10">
      <Logo size="small" />
      <div className="flex-1">
        <SearchBar defaultValue={query} variant="header" />
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#" className="hover:underline">Collections</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
