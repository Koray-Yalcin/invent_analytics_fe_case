import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getMovies } from "../store/slices/movieSlice";
import MoviesTable from "../components/MoviesTable";
import Filter from "../components/Filter";
import Paginate from "../components/Paginate";

const Movies: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, parameters, totalPages } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    dispatch(getMovies({ searchTerm: "pokemon" }));
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="app__title">Invent Analytics Fe Case</h1>
      <Filter />
      <MoviesTable movies={movies} />
      <Paginate totalPages={totalPages} parameters={parameters} />
    </div>
  );
};

export default Movies;
