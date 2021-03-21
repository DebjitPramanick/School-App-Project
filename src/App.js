import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Navbar from './Navbar/Navbar';
import Screen1 from './Screens/Screen1/Screen1';
import Screen2 from './Screens/Screen2/Screen2';

const App = () => {
    return (
        <div className="container">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <Screen1 />
                    </Route>
                    <Route path="/screen2" exact>
                        <Screen2 />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
