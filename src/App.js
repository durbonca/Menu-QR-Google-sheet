import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Family from './components/Family'
import Beer from './components/Beer'
import Licor from './components/Licor'
import Home from './pages/home'

function App() {
  return (
    <div className="App mb-5">
        <Switch>
                <Route path="/Family" render={() => <div><h1 className="mt-5">CARTA DE PLATOS</h1><Family/></div>} />
                <Route path="/Beer" render={() => <div><h1 className="mt-5">CARTA DE CERVEZAS</h1> <Beer/></div>} />
                <Route path="/Licor" render={() => <div><h1 className="mt-5">CARTA DE LICORES</h1> <Licor/></div>} />
                <Route path="/" render={() => <div><h1 className="mt-5"><Home/></h1></div>}/>
        </Switch>  
    </div>
  );
}

export default App;
