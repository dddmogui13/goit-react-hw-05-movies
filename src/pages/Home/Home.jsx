import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../helper/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <main className={css.section}>
      <h1 className={css.title}>Trendings today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
