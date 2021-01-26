import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Family from './components/Family'
import Beer from './components/Beer'
import Licor from './components/Licor'
import Chesse from './components/Chesse'
import Wine from './components/Wine'
import Coffe from './components/Coffe'
import Home from './pages/home'
import Landing from './pages/landing'
import Postres from './components/Postres'
import Destilados from './components/Destilados'
import Bacoteo from './components/Bacoteo'

function App() {
  return (
    <div className="App">
        <Switch>
                <Route path="/Family" render={() => <div><h1 className="mt-5 mb-3">CARTA</h1><Bacoteo/><Chesse/><Family/><Postres/><Chesse/><Coffe/></div>} />
                <Route path="/Wine" render={() => <div><h1 className="mt-5 mb-3">VINOS</h1> <Wine/></div>} />
                <Route path="/Beer" render={() => <div><h1 className="mt-5 mb-3">BAR</h1><Beer/><Licor/><Destilados/><Coffe/></div>} />
               {/*  <Route path="/Licor" render={() => <div><h1 className="mt-5">CARTA DE LICORES</h1> </div>} />
                <Route path="/Chesse" render={() => <div><h1 className="mt-5">CARTA DE QUESOS</h1> </div>} />
                <Route path="/Coffe" render={() => <div><h1 className="mt-5">CARTA DE POSTRES, CAFÉ E INFUSIONES</h1> </div>} /> */}
                <Route path="/home" render={() => <div><Home/></div>}/>
                <Route path="/" render={() => <div><Landing/></div>}/>
        </Switch>
        <br/>
    </div>
  );
}

export default App;
