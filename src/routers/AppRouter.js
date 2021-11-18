import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../auth/components/login/LoginScreen";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ LoginScreen } />
            </Switch>
        </Router>
    )
}