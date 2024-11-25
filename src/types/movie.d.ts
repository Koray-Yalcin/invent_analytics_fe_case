export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesTableProps {
  movies: Movie[];
}

export interface MoviesState {
  movies: Movie[];
  totalPages: number;
  parameters: {
    searchTerm: string;
    selectedType?: string;
    selectedYear?: string;
    page: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface PaginationProps {
  totalPages: number;
  parameters: {
    searchTerm: string;
    selectedType?: string;
    selectedYear?: string;
    page: number;
  };
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
}
