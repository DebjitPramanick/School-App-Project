import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Navbar from './Navbar/Navbar';
import Screen1 from './Screens/Screen1/Screen1';
import Screen2 from './Screens/Screen2/Screen2';

const App = () => {

    const [param, setParam] = useState('')

    return (
        <div className="container">
            <Router>
                <Navbar param={param}/>
                <Switch>
                    <Route path="/" exact>
                        <Screen1 setParam={setParam}/>
                    </Route>
                    <Route path="/attendance" exact>
                        <Screen2 setParam={setParam}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
