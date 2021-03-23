import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../../api/Requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState();

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage:
          movie &&
          `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
