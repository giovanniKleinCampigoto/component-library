import React from "react";
import { Switch, Route } from "react-router-dom";

import ButtonPage from "../pages/Button";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/button" component={ButtonPage} />
      <Route exact path="/input" />
    </Switch>
  );
};

export default Routes;
