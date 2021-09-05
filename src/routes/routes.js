import React from "react";
import Home from "../layouts/Home"
import {Switch, Route} from "react-router-dom"

const Routes = ()=>{
    return (
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    )
}



export default Routes