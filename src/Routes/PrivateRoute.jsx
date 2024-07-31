import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { firebase_app } from '../Config/Config';
import { authHeader, handleResponse } from '../Services/Fack.Backend';

const PrivateRoute = () => {
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {
        setIsMounted(true);
        if (isMounted) {
            const requestOptions = { method: 'GET', headers: authHeader() };
            fetch('/users', requestOptions).then(handleResponse);
            firebase_app.auth().onAuthStateChanged(setCurrentUser);
            setAuthenticated(JSON.parse(localStorage.getItem('authenticated')));
            localStorage.setItem('authenticated', authenticated);
            localStorage.setItem('currentUser', currentUser);
        }
        return () => {
            setIsMounted(false);
        };
    }, []);

    return (
        currentUser !== null || authenticated || jwt_token ?
            <Outlet />
            :
            <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />
    );
};

export default PrivateRoute;

