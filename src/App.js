// App.js

import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";
import { useState } from "react";
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  // 1.
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else {
    // content = <MovieList />;
    content = <ImprovedMovieList />;
  }

  return <div className="App">{content}</div>;
}

export default App;
