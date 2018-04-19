import React from "react";
import { Route, Switch } from "react-router";
import Tracks from './Tracks';
import About from './About';
import Track from './Track';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Tracks} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tracks/:id" component={Track} />
    </Switch>
  </main>
);

export default Main;
