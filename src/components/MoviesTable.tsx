import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { MoviesTableProps } from "../types/movie";
import { useNavigate } from "react-router-dom";

const MoviesTable: React.FC<MoviesTableProps> = ({ movies }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <TableContainer className="app__table-container" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Poster</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>IMDB ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie.imdbID}
              className="app__table-row"
              onClick={() => handleRowClick(movie.imdbID)}
            >
              <TableCell>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="app__poster"
                  style={{ width: "50px", height: "auto" }}
                />
              </TableCell>
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;
