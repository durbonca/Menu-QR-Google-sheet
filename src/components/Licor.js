import React from "react"
import dataLicor from '../data/dataLicor';
import ProductLicor from './ProductLicor'
import {Link} from 'react-router-dom'
import Bars from './bars'

class Family extends React.Component {
    
    render (){
        
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {dataLicor.map(function (dataLicor){
                    return <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataLicor.title}</h3>
                                    <Bars/>
                                </div>
                                <div class="row">
                                    <i>{dataLicor.description}</i>
                                </div>
                                <div class="row d-flex justify-content-end">
                                        <span className="col-3 p-0 text-right">{dataLicor.cl} {dataLicor.cl?'cl':''}</span>
                                        <span className="col-2 p-0 text-right">{dataLicor.cl2} {dataLicor.cl2?'cl':''}</span>
                                </div>
                                <ProductLicor product={dataLicor.products}/>
                            </div>
                })}
                
                <div className="mt-5" style={{border:"solid #732619 2px", padding:"2px"}}>
                    <div className="p-3" style={{border:"solid #732619 1px"}}>
                        <h5>Valor Incluye Cocktail o Combinados</h5>
                    </div>
                </div>
              </div> 
    }
}


export default Family