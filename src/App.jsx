import { useEffect } from 'react';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAuthStore } from './store/AuthStore'; 
import { router } from './routes';

function App() {
  const { checkLogin, loading } = useAuthStore();  // Extraer la función checkLogin y el estado loading del store

  useEffect(() => {
    checkLogin();  // Verifica si el usuario está autenticado cuando se carga la app
  }, [checkLogin]);

  if (loading) return <div className='loader mx-auto'></div>;  // Muestra un indicador de carga mientras se verifica el login
  
  return (
    <Suspense fallback={<div className='loader mx-auto'></div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
