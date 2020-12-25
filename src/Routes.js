import React from 'react';
import { Route, Switch } from "react-router-dom";
import Favourite from './components/Favourite';
import Home from './components/Home';

const Routes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favouriteplanets" component={Favourite} />
      </Switch>
    </>
  );
};

export default Routes;