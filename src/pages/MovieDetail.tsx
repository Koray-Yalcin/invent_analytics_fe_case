import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieDetails } from "../types/movie";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        setMovie(response.data);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetail();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>No movie details found.</p>;
  }

  return (
    <div className="movie-detail-page">
      <h1>{movie.Title}</h1>
      <div className="movie-detail-page__content">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-detail-page__info">
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>IMDB Ratings:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
