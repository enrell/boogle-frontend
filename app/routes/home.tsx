import type { Route } from "./+types/home";
import { Logo } from "../components/ui/Logo";
import { SearchBar } from "../components/features/search/SearchBar";
import { Footer } from "../components/layout/Footer";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { useSearchParams } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boogle" },
    { name: "description", content: "Boogle - Open Source Search Engine for Free Books" },
  ];
}

export default function Home() {
  const [filter, setFilter] = useState("all"); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-boogle-dark transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-2xl px-4 flex flex-col items-center gap-8">
        <Logo />
        <SearchBar filter={filter} onFilterChange={setFilter} variant="centered"/>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
