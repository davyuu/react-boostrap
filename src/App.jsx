import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Notes } from '@pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/notes'>
          <Notes />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
