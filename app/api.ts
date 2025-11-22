const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export interface BookMetadata {
  book_id: number;
  url: string;
  title: string | null;
  author: string | null;
  illustrator: string | null;
  release_date: string | null;
  language: string | null;
  category: string | null;
  original_publication: string | null;
  credits: string | null;
  copyright_status: string | null;
  downloads: string | null;
  files: Array<{
    format: string;
    url: string;
  }>;
}

export interface SearchResult {
  book_id: number;
  title: string;
  url: string;
}

export async function getBookMetadata(bookId: number): Promise<BookMetadata> {
    const response = await fetch(`${API_BASE_URL}/metadata/${bookId}`);

    if(!response.ok){
        throw new Error(`Failed to search book is not exist: ${response.statusText}`);
    } 
    return response.json();
}

export async function searchBooks(query: string, filter: string): Promise<SearchResult[]> {
    const response = await fetch(`${API_BASE_URL}/search?query=${encodeURIComponent(query)}`);

    if (!response.ok) {
    throw new Error(`Failed to search books: ${response.statusText}`);
  } 

   let results = await response.json();
    
    if (!results || results.length === 0) {
        throw new Error(`No books found for "${query}"`);
    } 
    if (filter === 'title') {
      results = results.filter((book: SearchResult) => 
        book.title.toLowerCase().includes(query.toLowerCase())
        )
    }
  return results;
}
