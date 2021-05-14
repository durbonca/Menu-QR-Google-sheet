import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Family from './components/Family'
import Beer from './components/Beer'
import Licor from './components/Licor'
import Wine from './components/Wine'
import Coffe from './components/Coffe'
import Home from './pages/home'
import Menu from "./pages/menu"
import Landing from './pages/landing'
import Destilados from './components/Destilados'
import Ostras from "./components/ostras"

function App() {
  return (
    <div className="App">
        <Switch>
                <Route path="/menu/platos" render={() => <div><Ostras/><Family/></div>} />
                <Route path="/menu/vinos" render={() => <div><h1 className="mt-5 mb-3">VINOS</h1> <Wine/></div>} />
                <Route path="/menu/bar" render={() => <div><h1 className="mt-5 mb-3">BAR</h1><Beer/><Licor/><Destilados/><Coffe/></div>} />
                <Route path="/home" render={() => <div><Home/></div>}/>
                <Route exact path="/" render={() => <div><Landing/></div>}/>
        </Switch>
        <br/>
    </div>
  );
}

export default App;
