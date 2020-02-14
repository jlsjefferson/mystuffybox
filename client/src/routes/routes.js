import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../pages/Home";
import Box from "../pages/box/";

const Routes = () => {
    return(
    <Router>
      <Switch>      
        <Route   path='/' exact component={App}/>
        <Route   path='/box/:id'  exact component={Box}/>
      </Switch>
    </Router>
)};

export default Routes;



