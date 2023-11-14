import { fetchMovieDetails } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  AdInfoWrapper,
  PosterInfoWrapper,
  PosterWrapper,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovies] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { release_date, overview, vote_average, genres, title } = movie;
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
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong, try again.</p>
      ) : (
        <>
          <Link to={backLink.current}>
            <AiOutlineArrowLeft />
            Go back
          </Link>
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
                <h1>
                  {title} ({release_date ? releaseYear : 'XXXX'})
                </h1>
              ) : (
                <p>We don`t have title for this movie</p>
              )}

              {vote_average ? (
                <p>User score: {voteAverage}</p>
              ) : (
                <p>We don`t have votes for this movie</p>
              )}

              {overview ? (
                <div>
                  <h2>Overview</h2>
                  <p>{overview}</p>
                </div>
              ) : (
                <p>We don`t have overview for this movie</p>
              )}

              {genres ? (
                <div>
                  <h2>Genres</h2>
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
          <AdInfoWrapper>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          </AdInfoWrapper>
          <Outlet />
        </>
      )}
    </>
  );
}
