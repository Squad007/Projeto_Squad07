import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const credentials = useSelector((state) => state.credentials);

  return (
    <Route
      {...rest}
      render={() =>
        credentials.token ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
};

export default RoutesPrivate;
