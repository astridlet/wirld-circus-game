import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';
import '../../App.css';


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => (
                isLogin() ?
                <div>
                <Component {...rest} />
                </div>
                : <Redirect to="/signin" />
            )} />
    );
};

export default PrivateRoute;