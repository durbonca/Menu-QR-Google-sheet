import React from "react"
import dataBeer from '../data/dataBeer';
import Bars from './bars'
import ProductBeer from './ProductBeer'

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                {dataBeer.map(function (dataBeer){
                    return <div>
                               { dataBeer.title &&
                                <div  className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataBeer.title}</h3>
                                    <Bars/>
                                </div> }
                                <h4 className="col-auto mt-3 text-center">{dataBeer.subtitle}</h4>
                                {dataBeer.subtitle === 'Barril' &&  
                               <div className="d-flex justify-content-end">
                                   <p className="col-auto m-0 pr-0">Caña<br/>20 cl</p>
                                   <p className="col-auto m-0 pr-0 pl-4">Shop<br/>40 Cl</p> 
                               </div>
                                }
                                <ProductBeer product={dataBeer.products}/>
                            </div>
                })}
              </div> 
    }
}

export default Family