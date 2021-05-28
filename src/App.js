import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import { Platos, Vinos, Bar, Home, Landing } from "./pages"

function App() {
  return (
    <div className="App">
        <Switch>
                <Route exact path="/" render={() => <Landing/> }/>
                <Route path="/home" render={() => <Home/> }/>
                <Route path="/menu/platos" render={() => <Platos/> } />
                <Route path="/menu/vinos" render={() => <Vinos/> } />
                <Route path="/menu/bar" render={() => <Bar/> } />
        </Switch>
        <br/>
    </div>
  );
}

export default App;
