import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route
              path="movies/:movieId/cast"
              element={<div>Movies id Cast</div>}
            />
            <Route
              path="movies/:movieId/reviews"
              element={<div>Movie id Reviews</div>}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
