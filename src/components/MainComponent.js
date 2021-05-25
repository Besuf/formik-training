import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Lecture1 from "./lectures/Lecture1";

export default function MainComponent() {
  return (
    <div>
      <h1>React Formik Play-ground</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lecture-1" component={Lecture1} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
