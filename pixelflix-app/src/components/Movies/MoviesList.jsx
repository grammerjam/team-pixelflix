import "./MoviesList.scss";
import React from "react";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvIcon from "../../assets/icons/icon-category-tv.svg";

export default function MoviesList({ movies }) {
  return (
    <div className="moviecards">
      {movies?.map((video) => (
        <div key={video.id} className="moviecard">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="moviecard__thumbnail"
          />
          <div className="moviecard__info">
            <div className="moviecard__info-details">
              <p className="moviecard__info-text moviecard__info-year">
                {video.year}
              </p>
              <p className="moviecard__info-bullet">•</p>
              <div className="moviecard__info-category-container">
                <img
                  className="moviecard__info-category-icon"
                  src={video.category === "Movie" ? movieIcon : tvIcon}
                  alt={video.category}
                />
                <p className="moviecard__info-text moviecard__info-category">
                  {video.category}
                </p>
              </div>
              <p className="moviecard__info-bullet">•</p>
              <p className="moviecard__info-text moviecard__info-rating">
                {video.rating}
              </p>
            </div>
            <p className="moviecard__info-text moviecard__info-title">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}