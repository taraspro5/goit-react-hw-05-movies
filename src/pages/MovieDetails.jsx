import { fetchMovieDetails } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchMovieDetails(movieId);
        console.log(resp);
        setMovie(resp);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong, try again.</p>}
      {movie && (
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt=""
        />
      )}
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <div>Movies Details</div>
      <Outlet />
    </>
  );
}
