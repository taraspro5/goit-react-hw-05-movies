import { fetchMovieReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment, CommentsWrapper, NoComment } from './Reviews.styled';

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
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong, try again.</p>
      ) : review.length > 0 ? (
        <CommentsWrapper>
          {review.map(({ id, author, content }) => (
            <Comment key={id}>
              {author && (
                <p>
                  <b>Author: {author}</b>
                </p>
              )}
              {content && <p>{content}</p>}
            </Comment>
          ))}
        </CommentsWrapper>
      ) : (
        <NoComment>We don`t have reviews for this movie</NoComment>
      )}
    </>
  );
};
