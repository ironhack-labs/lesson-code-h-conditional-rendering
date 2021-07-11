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

  if (isLoading) {
    <div className="App">
      <Spinner />
    </div>;
  } else {
    return (
      <div className="App">
        {/* <ImprovedMovieList />; */}
        <MovieList />
      </div>
    );
  }
}

export default App;
