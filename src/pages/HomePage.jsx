import { fetchAllMovies } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getAllMovies() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchAllMovies();
        setMovies(resp.results);
        console.log(resp.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getAllMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <p>Something went wrong, try again.</p>}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
