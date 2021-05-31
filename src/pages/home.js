import {Link} from "react-router-dom"
function Home (){

        return( 

            <div className="vh-100">
                <img src={process.env.PUBLIC_URL + "logo-baco.svg"} alt="logo" className="col-10 h-50"/>
                
                <div className="navLinks">
                
                            <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to={`/menu/platos`}>
                                <div><p><strong>Platos</strong></p></div>
                            </Link>
                            <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to={`/menu/vinos`}>
                                <div><p><strong>Vinos</strong></p></div>
                            </Link>
                            <Link className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to={`/menu/bar`}>
                                <div><p><strong>Bar</strong></p></div>
                            </Link>
                        
                </div>
                
            </div> 
        )   
}
export default Home