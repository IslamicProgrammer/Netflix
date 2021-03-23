import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../api/axios';
import { Clear } from '@material-ui/icons';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';

const Row = ({ title, isLargeRow = false, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [movieId, setMovieId] = useState();
  const [youtubeKey, setYoutubeKey] = useState('');

  // https://api.themoviedb.org/3/movie/484718/videos?api_key=742fe5bffcc367117cb0b623259272a9 base url

  const base_url = 'https://image.tmdb.org/t/p/original/';
  const base_url_trailer = 'https://api.themoviedb.org/3/movie/';

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, []);

  const openPlayerHander = (id) => {
    setOpenPlayer((prev) => !prev);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=742fe5bffcc367117cb0b623259272a9`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data && data?.results?.length && data?.results?.length > 0) {
          setYoutubeKey(data.results[0].key);
        } else {
          setYoutubeKey('Hs-1_HNALhw');
        }
      });
  };

  const openVideoHandler = () => {
    setOpenPlayer((prev) => !prev);
    setYoutubeKey('');
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies &&
          movies?.map((movie) => (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              onClick={() => openPlayerHander(movie.id)}
              key={movie?.id}
              src={`${base_url}${
                movie && movie.poster_path && movie.backdrop_path && isLargeRow
                  ? movie?.poster_path
                  : movie?.backdrop_path
              }`}
              alt={movie?.name}
            />
          ))}
      </div>
      {
        <div
          className={`${
            openPlayer ? 'openVideo row__videoContainer' : 'row__videoContainer'
          }`}
        >
          <iframe
            className={`${
              openPlayer && youtubeKey ? 'openIframe row__video' : 'row__video'
            }`}
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${youtubeKey}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
          <Clear onClick={openVideoHandler} />
        </div>
      }
    </div>
  );
};

export default Row;
