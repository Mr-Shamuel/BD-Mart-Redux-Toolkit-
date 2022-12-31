import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebaseConfig';

const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation()

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />

    }
    return children;
    // return user === true ? children : <Navigate to="/login" replace />;

};

export default PrivateRoute;