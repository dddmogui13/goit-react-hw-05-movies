import { getCast } from 'helper/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';
const defaultImgUrl =
  'https://www.ysveldfysio.nl/wp-content/uploads/2023/09/istockphoto-1018999828-612x612-1.jpeg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const castById = async () => {
      try {
        const castDetalis = await getCast(movieId);
        if (castDetalis) {
          setCast(castDetalis);
        } else {
          console.log('No cast details available.');
        }
      } catch (e) {
        console.log(e);
      }
    };
    castById();
  }, [movieId]);

  return (
    <div className={css.box}>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li className={css.item} key={id}>
              <img
                className={css.image}
                src={
                  profile_path ? basePosterPath + profile_path : defaultImgUrl
                }
                width={150}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>We don't have info about cast for the movie.</p>
      )}
    </div>
  );
};

export default Cast;
