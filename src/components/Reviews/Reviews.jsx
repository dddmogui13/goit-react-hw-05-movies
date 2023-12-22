import { getReviews } from 'helper/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const ReviewsById = async () => {
      try {
        const reviewsDetalis = await getReviews(movieId);
        if (reviewsDetalis) {
          setReviews(reviewsDetalis);
        } else {
          console.log('We don`t have any reviews for the movie.');
        }
      } catch (e) {
        console.log(e);
      }
    };
    ReviewsById();
  }, [movieId]);

  return (
    <div className={css.box}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3 className={css.title}>Author {author}</h3>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>We don't have any reviews for the movie.</p>
      )}
    </div>
  );
};

export default Reviews;
