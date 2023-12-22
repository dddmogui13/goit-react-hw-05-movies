import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import { getMovieByQuery } from 'helper/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    if (!currentQuery) return;

    const fetchMovie = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovie(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovie();
  }, [searchParams]);

  return (
    <div className={css.box}>
      <Form setSearchParams={setSearchParams} />
      {movie.length > 0 && <MoviesList movies={movie} />}
    </div>
  );
};

export default Movies;
