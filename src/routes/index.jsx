import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';


const LazyHome = lazy(() => import('../pages/home/Home'));
const SectionTop = lazy(() => import('../pages/home/section-top/SectionTop'));

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