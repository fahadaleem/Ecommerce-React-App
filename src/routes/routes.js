import React from "react";
import Home from "../layouts/Home"
import AdminDashboard from "../layouts/AdminDashboard";
import {Switch, Route} from "react-router-dom"

const Routes = ()=>{
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/admin" component={AdminDashboard}/>
        </Switch>
    )
}



export default Routes