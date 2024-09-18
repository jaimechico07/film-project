import { React,lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';


const LazyHome = lazy(() => import('../pages/home/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyHome />,
  },
  {
    path: '/top',
    element: <SectionTop />,
  },
]);