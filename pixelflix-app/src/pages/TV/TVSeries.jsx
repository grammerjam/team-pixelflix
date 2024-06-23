import "./TVSeries.scss";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import TVShowsList from "../../components/TV-Shows/TVShowsList";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvIcon from "../../assets/icons/icon-category-tv.svg";

export default function TVShowsPage() {
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await getDocs(collection(db, "Movies-TV"));
      const fetchedVideos = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const category = fetchedVideos.filter((video) => video.category === "TV Series");
      setShowsList(category);
    };
    getShows();
  }, []);

  return (
    <div className="tvshows">
      <h2 className="tvshows__heading">TV Shows</h2>
      <TVShowsList shows={showsList} />
    </div>
  );
}