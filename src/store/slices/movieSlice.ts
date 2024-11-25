import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie, MoviesState } from "../../types/movie";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const initialState: MoviesState = {
  movies: [],
  totalPages: 1,
  parameters: {
    searchTerm: "pokemon",
    selectedType: "",
    selectedYear: "",
    page: 1,
  },
  status: "idle",
  error: null,
};

export const getMovies = createAsyncThunk<
  {
    movies: Movie[];
    totalPages: number;
    parameters: {
      searchTerm: string;
      selectedType?: string;
      selectedYear?: string;
      page: number;
    };
  },
  {
    searchTerm: string | null;
    selectedType?: string;
    selectedYear?: string;
    page?: number;
  },
  { rejectValue: string }
>(
  "movies/getMovies",
  async (
    { searchTerm = "pokemon", selectedType, selectedYear, page = 1 },
    { rejectWithValue }
  ) => {
    try {
      const query = searchTerm || "pokemon";
      const typeParam = selectedType ? `&type=${selectedType}` : "";
      const yearParam = selectedYear ? `&y=${selectedYear}` : "";
      const pageParam = `&page=${page}`;

      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}${typeParam}${yearParam}${pageParam}`
      );

      if (response.status !== 200) {
        return rejectWithValue("Failed to fetch movies");
      }

      const totalResults = parseInt(response.data.totalResults, 10);
      const resultsPerPage = 10;
      const totalPages = Math.ceil(totalResults / resultsPerPage);

      return {
        movies: response.data.Search || [],
        totalPages,
        parameters: {
          searchTerm: query,
          selectedType,
          selectedYear,
          page,
        },
      };
    } catch (error) {
      return rejectWithValue("An error occurred while fetching movies");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.movies;
        state.totalPages = action.payload.totalPages;
        state.parameters = action.payload.parameters;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default movieSlice.reducer;
