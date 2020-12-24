import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import { Context } from './shared/store/Context';

const Routes = () => {

  // const {} = React.useContext(Context);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;