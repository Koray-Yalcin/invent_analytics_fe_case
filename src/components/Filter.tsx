import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getMovies } from "../store/slices/movieSlice";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";

const Filter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(getMovies({ searchTerm, selectedType, selectedYear }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSelectedType(checked ? name : "");
  };

  return (
    <div className="search">
      <div className="search__filters">
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedType === "movie"}
              onChange={handleCheckboxChange}
              name="movie"
            />
          }
          label="Movies"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedType === "series"}
              onChange={handleCheckboxChange}
              name="series"
            />
          }
          label="TV Series"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedType === "episode"}
              onChange={handleCheckboxChange}
              name="episode"
            />
          }
          label="TV Series Episodes"
        />
      </div>

      <TextField
        label="Search Movies"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search__input"
      />

      <TextField
        label="Year"
        variant="outlined"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="search__input"
        type="number"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        className="search__button"
      >
        Search
      </Button>
    </div>
  );
};

export default Filter;
