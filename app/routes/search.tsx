import type { MetaFunction } from "react-router";
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { searchBooks, type SearchResult } from "../api";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Boogle Search" },
    { name: "description", content: "Search results for free books" },
  ];
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const filter = searchParams.get("filter") || "all";

  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null> (null);

  useEffect(() => {
    if(!query.trim()) {
      setResults([]);
       return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await searchBooks(query, filter);
        setResults(results);
      }catch (err) {
        setError((err as Error)?.message);
        setResults([]);
      }finally {
        setLoading(false);
      }
    };
    fetchResults();
  },[query, filter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header query={query} />
 
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && results.length > 0 &&( 
        <p className="text-gray-500 text-sm mb-4"> 
          The search found {results.length} books 
          </p>
        )}
      
        {/* Result Skeleton */}
        <div className="space-y-8 max-w-3xl">
          {loading ? (
            <div className=" text-lg">
              <p className="text-gray-500 text-sm"> Loading... </p>
              </div>
          ): (
            results.map((book) => (
                <div key={book.book_id} className="flex flex-col gap-1">
                    <div className="text-sm text-gray-600">{book.url}</div>
                    <Link to={`/book/${book.book_id}`} className="dark:text-gray-200 text-xl text-blue-800 hover:underline visited:text-purple-900 font-medium">
                        {book.title}
                    </Link>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        
                    </p>
                </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}



