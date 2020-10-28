import React from "react"
import dataPostres from '../data/dataPostres';
import Product from './Product'
import {Link} from 'react-router-dom'
import Bars from "./bars"

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataPostres.map(function (dataPostres){
                    return <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataPostres.title}</h3>
                                    <Bars/>
                                    <p><i>{dataPostres.description}</i></p>
                                </div>
                                <Product product={dataPostres.products}/>
                            </div>
                })}

              </div> 
    }
}


export default Family