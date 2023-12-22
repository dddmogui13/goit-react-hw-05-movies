import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link
            className={css.link}
            state={{ from: location }}
            to={`/movies/${movie.id}`}
          >
            {movie.title ?? movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
