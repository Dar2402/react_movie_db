import { Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import SingleMovieDetail from "./components/SingleMovieDetail/SingleMovieDetail";
import Search from "./components/search/Search";
import "./App.css";
import Topbar from "./shared/component/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
    <Routes>
      <Route path="/" element={<Body apiPath="popular" />} />
      <Route path="movie/:id" element={<SingleMovieDetail />} />
      <Route path="/movies/popular" element={<Body apiPath="popular" />} />
      <Route path="/movies/top" element={<Body apiPath="top_rated" />} />
      <Route path="/movies/upcoming" element={<Body apiPath="upcoming" />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
    </Routes>
    </div>
  );
}

export default App;
