import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = (props) => {
    return (
        <Route path={props.path}>
            {props.isLoggedIn ? props.children : <Redirect to={props.redirect} />}
        </Route>
    )
}

export default ProtectedRoute