import React from "react"
import dataDestilados from '../data/dataDestilados';
import ProductDestilados from './ProductDestilados'
import Bars from './bars'

class Family extends React.Component {
    
    render (){
        
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                {dataDestilados.map(function (dataDestilados){
                    return <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataDestilados.title}</h3>
                                    <Bars/>
                                </div>
                                <div className="row">
                                    <i className="col-12 text-right">{dataDestilados.description}</i>
                                </div>
                                <ProductDestilados product={dataDestilados.family}/>
                            </div>
                })}
              </div> 
    }
}


export default Family