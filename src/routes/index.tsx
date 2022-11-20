import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Switch>
);

export default Routes;
