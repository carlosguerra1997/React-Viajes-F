import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../auth/components/login/LoginScreen";
import { ViajesRouter } from "./ViajesRouter";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route path="/" component={ ViajesRouter } />
                    </Switch>
                </div>
            </Router>
        </div>
        
    )
}