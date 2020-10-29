import React from "react"
import dataChesse from '../data/dataChesse';
import Bars from './bars'
import Product from './ProductChesse'
import {Link} from 'react-router-dom'

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataChesse.map(function (dataProducts){
                    return <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                    <p><i>{dataProducts.description}</i></p>
                                </div>
                                <Product product={dataProducts.products}/>
                            </div>
                })}

              </div> 
    }
}


export default Family