import "./TVShowsList.scss";
import React from "react";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvIcon from "../../assets/icons/icon-category-tv.svg";

export default function TVShowsList({ shows }) {
  return (
    <div className="tvshowcards">
      {shows?.map((video) => {
        return (
          <div
            key={video.id}
            className="tvshowcard"
          >
            <div
              className="tvshowcard__thumbnail"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            ></div>
            <div className="tvshowcard__info">
              <div className="tvshowcard__info-details">
                <p className="tvshowcard__info-text tvshowcard__info-year">
                  {video.year}
                </p>
                <p className="tvshowcard__info-bullet">•</p>
                <div className="tvshowcard__info-category-container">
                  <img
                    className="tvshowcard__info-category-icon"
                    src={video.category === "Movie" ? movieIcon : tvIcon}
                  />
                  <p className="tvshowcard__info-text tvshowcard__info-category">
                    {video.category}
                  </p>
                </div>
                <p className="tvshowcard__info-bullet">•</p>
                <p className="tvshowcard__info-text tvshowcard__info-rating">
                  {video.rating}
                </p>
              </div>
              <p className="tvshowcard__info-text tvshowcard__info-title">
                {video.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}