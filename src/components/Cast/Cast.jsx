import { fetchMovieCredits } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieCredits() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchMovieCredits(movieId);
        setCast(resp.cast);
        console.log(resp.cast);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieCredits();
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong, try again.</p>}
      {loading && <Loader />}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ cast_id, profile_path, name, character }) => {
            return (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultImg
                  }
                  alt="human"
                  width={250}
                />
                {name && <p>{name}</p>}
                {character && <p>Character: {character}</p>}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Nothing</div>
      )}
    </>
  );
};
