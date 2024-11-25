import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
