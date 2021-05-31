import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import { Home } from "./pages"

function App() {
  return (
    <div className="App">
        <Switch>
                <Route exact path="/" render={() => <Home/> }/>
        </Switch>
        <br/>
    </div>
  );
}

export default App;
