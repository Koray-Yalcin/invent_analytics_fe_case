import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getMovies } from "../store/slices/movieSlice";
import { PaginationProps } from "../types/movie";

const Paginate: React.FC<PaginationProps> = ({ totalPages, parameters }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [parameters.searchTerm, parameters.selectedType, parameters.selectedYear]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);

    dispatch(
      getMovies({
        searchTerm: parameters.searchTerm,
        selectedType: parameters.selectedType,
        selectedYear: parameters.selectedYear,
        page: value,
      })
    );
  };

  return (
    <div className="pagination">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
};

export default Paginate;
