import React from "react"
import {Link} from "react-router-dom"

class Home extends React.Component{
    render(){
        return(
            <div className="vh-100">
                <img src={process.env.PUBLIC_URL + "logo-baco.svg"} alt="logo" className="col-10 h-50"/>
                <div className="navLinks">
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Family">
                        <div><p><strong>Platos</strong></p></div>
                    </Link>
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Wine">
                        <div><p><strong>Vinos</strong></p></div>
                    </Link>
                    <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to="/Beer">
                        <div><p><strong>Bar</strong></p></div>
                    </Link>
                </div>
            </div> 
        )
    }
}

export default Home