import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation'
import { HomePage } from "./HomePage/HomePage";
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MoviesPage } from './MoviesPage/MoviesPage';
import 'react-toastify/dist/ReactToastify.css';







export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />

        <Route path="movies/:itemId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        
        
          <Route path="*" element={<Navigate to="/home" />} />
        
        </Routes>
    </>
  );
};
