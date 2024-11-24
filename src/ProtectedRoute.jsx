import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from './store/AuthStore'; 

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuthStore(); // Obtener el estado desde Zustand

    if (loading) return <div>Loading...</div>;
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default ProtectedRoute;