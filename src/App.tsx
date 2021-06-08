import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Login} from './Login/Login';
import {Page404} from "./page404/Page404";
import {Profile} from "./Profile/Profile";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} render={() => <Profile/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={'/404'} render={() => <Page404/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
