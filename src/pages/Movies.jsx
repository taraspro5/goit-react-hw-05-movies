import { fetchMovieBySearch } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('toSearch');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    console.log(searchQuery);
    async function getMoviebySearch() {
      try {
        setLoading(true);
        setError(false);
        const resp = await fetchMovieBySearch(searchQuery);
        console.log(resp);
        setMovies(resp.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviebySearch();
  }, [searchQuery]);

  return (
    <>
      <SearchForm />

      {error && <p>Something went wrong, try again.</p>}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
