import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {AuthContext} from '../context/authContext';

const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
