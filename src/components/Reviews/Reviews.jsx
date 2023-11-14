import { fetchMovieReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReview() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchMovieReviews(movieId);
        setReview(resp.results);
        console.log(resp);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieReview();
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong, try again.</p>}
      {loading && <Loader />}
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              {author && <p>Author: {author}</p>}
              {content && <p>{content}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have reviews for this movie</p>
      )}
    </>
  );
};
