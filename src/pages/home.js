import React from "react"
import {Link} from "react-router-dom"
/* import bike from '../icons/delivery.svg' */

class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={process.env.PUBLIC_URL + '/cork.png'} alt="CORK" className="col-12"/>
                <div className="navLinks">
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Family"><div><p><strong>Platos</strong></p></div></Link>
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Wine"><div><p><strong>Vinos</strong></p></div></Link>
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Beer"><div><p><strong>Bar</strong></p></div></Link>
                    {/* <a className="col-8 mt-4 d-flex justify-content-center align-items-center btn btn-data rounded delivery-button" href="https://baco.rest" target="_blank" rel="noreferrer">Baco A Tu Casa<img height="20px" src={bike} alt="delivery"/></a> */}
                    {/* <Link className="col m-2 d-flex justify-content-center align-items-center btn btn-data rounded shadow" to="/Chesse"><div><span className="emoji" role="img" aria-label={""}></span><p>Quesos</p></div></Link>
                        <Link className="col m-2 d-flex justify-content-center align-items-center btn btn-data rounded shadow" to="/Coffe"><div><span className="emoji" role="img" aria-label={""}></span><p>Postres, Café e infusiones</p></div></Link>
                        <Link className="col m-2 d-flex justify-content-center align-items-center btn btn-data rounded shadow" to="/Licor"><div><span className="emoji" role="img" aria-label={""}></span><p>Licores</p></div></Link> */}
                </div>
            </div> 
        )
    }
}

export default Home