import { fetchMovieDetails } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { PosterInfoWrapper, PosterWrapper } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovies] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { release_date, overview, vote_average, genres, title, poster_path } =
    movie;
  const voteAverage = Math.round(vote_average * 10) + '%';
  const releaseYear = new Date(release_date).getFullYear();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchMovieDetails(movieId);
        setMovies(resp);
        console.log(resp);
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
      {loading && <Loader />}
      <Link to={backLink.current}>Go back</Link>
      <PosterWrapper>
        {movie && (
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        )}
        <PosterInfoWrapper>
          {title ? (
            <p>
              {title} ({release_date ? releaseYear : 'XXXX'})
            </p>
          ) : (
            <p>We don`t have title for this movie</p>
          )}

          {overview ? (
            <div>
              <p>Overview</p>
              <p>{overview}</p>
            </div>
          ) : (
            <p>We don`t have overview for this movie</p>
          )}

          {genres ? (
            <div>
              <p>Genres</p>
              {genres.map(({ name, id }) => (
                <span key={id}>{name} </span>
              ))}
            </div>
          ) : (
            <p>We don`t have genres for this movie</p>
          )}
        </PosterInfoWrapper>
      </PosterWrapper>
      {error && <p>Something went wrong, try again.</p>}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
