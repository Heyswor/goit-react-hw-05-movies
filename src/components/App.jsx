import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Cast } from './MovieCredits/MovieCredits';
// import { Reviews } from './MovieReviews/MovieReviews';
import { lazy, Suspense } from 'react';

const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../components/MovieCredits/MovieCredits'));
const Reviews = lazy(() => import('../components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
