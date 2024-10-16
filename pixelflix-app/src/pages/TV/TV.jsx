import "./TV.scss";
import React from "react";
import VideoList from "../../components/VideoList/VideoList";
import { useVideos } from "../../context/VideosContext";

export default function TV() {
  const { filteredShows } = useVideos();

  return (
    <div className="home">
      <h1 data-testid="tv-header" className="home__heading">TV Series</h1>
      <VideoList videos={filteredShows} />
    </div>
  );
}
