import React from "react"
import dataLicor from '../data/dataLicor';
import Product from './Product'
import {Link} from 'react-router-dom'

class Family extends React.Component {
    
    render (){
        
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn btn-warning backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataLicor.map(function (dataLicor){
                    return <div>
                                <div className="row mt-5 d-flex">
                                    <div className="col bar"></div>
                                    <h3 className="col-auto text-center">{dataLicor.title}</h3>
                                    <div className="col bar"></div>
                                </div>
                                <Product product={dataLicor.products}/>
                            </div>
                })}

              </div> 
    }
}


export default Family