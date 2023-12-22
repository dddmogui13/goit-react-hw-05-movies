import { useEffect, useState } from 'react';
import { getMovieById } from '../../helper/api';
import css from './MovieDetails.module.css';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const checkMovieById = async () => {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
      } catch (e) {
        console.log(e);
      }
    };
    checkMovieById();
  }, [movieId]);

  return (
    <>
      <Link className={css.link} to={backLink}>
        Go back
      </Link>

      <div className={css.box}>
        {
          <img
            src={
              movie.poster_path
                ? [basePosterPath + movie.poster_path]
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        }
        <div className={css.textBox}>
          <h2>{movie.original_title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <ul className={css.list}>
            {movie.overview && (
              <li>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </li>
            )}
            <li>
              {movie.genres && movie.genres.length > 0 && (
                <div>
                  <h4>Genres</h4>
                  <ul className={css.listGenres}>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={css.linkBox}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink className={css.link} state={location.state} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} state={location.state} to="reviews">
              Review
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
