import React from "react"
import dataWine from '../data/dataWine';
import Product from './ProductWine'
import {Link} from 'react-router-dom'
import WinePromo from "./winePromo"

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <WinePromo/>
                <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataWine.map(function (dataProducts){
                    return <div>
                                <div className="row mt-5 d-flex">
                                    <h3 style={{color:"#ce321a"}} className="col-12 text-center">{dataProducts.title}</h3>
                                    <p className="col-12 text-center"><i className="small">{dataProducts.description}</i></p>
                                </div>
                                    <div className="row d-flex justify-content-end">
                                        {/* <span style={{fontSize:"25px"}} className="col-2 p-0 emoji" role="img" aria-label={""}>🍷</span> */}
                                        <span style={{fontSize:"25px"}} className="col-2 p-0 emoji" role="img" aria-label={""}>🍾</span>
                                    </div>
                                <Product product={dataProducts.products}/>
                            </div>
                })}
                <div className="mt-5" style={{border:"solid #732619 2px", padding:"2px"}}>
                    <div style={{border:"solid #732619 2px"}}>
                            <div className="row d-flex mt-1 p-1">
                                <p className="col text-left mb-0">Servicio Descorche</p>
                                <p className="col-auto text-right mb-0">$5.000</p>
                                <small className="col-12">Por Botella o Por Comensal</small>
                            </div>
                    </div>
                </div>

              </div> 
    }
}


export default Family