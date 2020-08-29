import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes'

const Router = () => {
  return (
    <Switch>
      {routes.map((route) => 
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      )}
      <Redirect to="/home"/>
    </Switch>
  );
};

export default Router;
