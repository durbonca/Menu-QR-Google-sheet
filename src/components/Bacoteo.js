import React from "react"
import bacoteo from '../data/bacoteo';
import Product from './Product'
import {Link} from 'react-router-dom'
import Bars from "./bars";
import Ostras from "./ostras"
 

class Family extends React.Component{
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                
                {bacoteo.map(function (bacoteo){
                    return  <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/> 
                                    <h3 className="col-auto text-center">{bacoteo.title}</h3>
                                    <Bars/>
                                </div>
                                <Ostras/>
                                    <p><i>{bacoteo.description}</i></p>
                                <Product product={bacoteo.products}/>
                            </div> 
                })}
              </div> 
    }
}

export default Family