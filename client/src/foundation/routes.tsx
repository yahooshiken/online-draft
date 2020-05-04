import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { Room } from "../pages/room";
import { Start } from "../pages/start";
import { NotFound } from "../pages/not_found";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/:roomKey" component={Room} />
    <Route exact path="/" component={Start} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
