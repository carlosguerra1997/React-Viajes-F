import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../viajes/components/ui/Navbar";
import { MainScreen } from "../viajes/components/MainScreen/MainScreen";
import { ViajesScreen } from "../viajes/components/Viajes/ViajesScreen";
import { ContactoScreen } from "../viajes/components/Contacto/ContactoScreen";

export const ViajesRouter = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/main" component={ MainScreen } />
                <Route exact path="/viajes" component={ ViajesScreen } />
                <Route exact path="/contacto" component={ ContactoScreen } />
                <Redirect to="/main" />
            </Switch>
        </div>
    )
}