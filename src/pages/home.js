import React from "react"
import {Link} from "react-router-dom"

class Home extends React.Component{
    render(){
        return(
            <div>
            <img src={process.env.PUBLIC_URL + '/cork.png'} alt="CORK" className="col-12"/>
            <div className="navLinks">
                <Link className="btn btn-warning rounded shadow" to="/Family"><div><span className="emoji" role="img" aria-label={""}>🍔</span><p>Comidas</p></div></Link>
                <Link className="btn btn-warning rounded shadow" to="/Beer"><div><span className="emoji" role="img" aria-label={""}>🍻</span><p>Cervezas</p></div></Link>
                <Link className="btn btn-warning rounded shadow" to="/Licor"><div><span className="emoji" role="img" aria-label={""}>🥃</span><p>Licores</p></div></Link>
            </div>
            </div> 
        )
    }
}

export default Home