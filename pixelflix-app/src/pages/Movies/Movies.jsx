import "./Movies.scss";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MoviesList from "../../components/Movies/MoviesList";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(collection(db, "Movies-TV"));
      const fetchedVideos = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const category = fetchedVideos.filter((video) => video.category === "Movie");
      setMoviesList(category);
    };
    getMovies();
  }, []);

  return (
    <div className="movies">
      <h2 className="movies__heading">Movies</h2>
      <MoviesList movies={moviesList} />
    </div>
  );
}