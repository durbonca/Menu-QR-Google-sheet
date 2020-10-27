import React from "react"
import dataWine from '../data/dataWine';
import Product from './ProductWine'
import {Link} from 'react-router-dom'

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataWine.map(function (dataProducts){
                    return <div>
                                <div className="row mt-5 d-flex">
                                    <h3 style={{color:"#ce321a"}} className="col text-center">{dataProducts.title}</h3>
                                    <p><i>{dataProducts.description}</i></p>
                                </div>
                                    <div class="row d-flex justify-content-end">
                                        <span style={{fontSize:"25px"}} className="col-3 p-0 ml-1 emoji" role="img" aria-label={""}>🍷</span>
                                        <span style={{fontSize:"25px"}} className="col-2 p-0 ml-1 emoji" role="img" aria-label={""}>🍾</span>
                                    </div>
                                <Product product={dataProducts.products}/>
                            </div>
                })}

              </div> 
    }
}


export default Family