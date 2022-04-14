import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import HomePage from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoutes';
import { useSelector } from 'react-redux';

const Routes = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    // console.log(isLoggedIn)
    return (
        <Switch>
            <Route path='/' exact >
                <Redirect to="/signup" />
            </Route>
            <ProtectedRoute path='/home' isLoggedIn={isLoggedIn} redirect="/signup">
                <HomePage />
            </ProtectedRoute>
            <ProtectedRoute path="/signup" redirect="/home" isLoggedIn={!isLoggedIn}>
                <SignUp />
            </ProtectedRoute>
        </Switch>
    );
}

export default Routes