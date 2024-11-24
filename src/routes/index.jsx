import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';


const LazyHome = lazy(() => import('../pages/home/Home'));
const LazyLogin = lazy(() => import('../pages/login/Login'));
const LazyRegister = lazy(() => import('../pages/register/Register'));
const LazyMovie = lazy(() => import('../pages/movies/list-movies/Movie'))
const LazyDetailMovie = lazy(() => import('../pages/movies/detail-movies/DetailMovies'))
const LazyFavorites = lazy(() => import('../pages/favorites/Favorites'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />, // Redirigir a login desde la raíz
  },
  {
    path: '/login',
    element: <LazyLogin />,
  },
  {
    path: '/register',
    element: <LazyRegister/>,
  },
  {
    element: <ProtectedRoute />, // Rutas protegidas
    children: [
    {
        path: '/home',
        element: <LazyHome/>,
    },
    {
      path: '/movies',
      element: <LazyMovie/>,
    },
    {
      path:'/movies/:id',
      element:<LazyDetailMovie/>
    },
    {
      path:'/favorites',
      element:<LazyFavorites/>
    }]
  }
 
]);
