import React from "react"
import dataChesse from '../data/dataChesse';
import dataTablaqueso from '../data/DataTablaqueso';
import Bars from './bars'
import Product from './ProductChesse'
import Tablaqueso from './Tablaqueso'

class Family extends React.Component {
    
    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                {dataChesse.map(function (dataProducts){
                    return <div>
                                <div className="row mb-0 mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                    <p><i>{dataProducts.description}</i></p>
                                </div>
                                <Product product={dataProducts.products}/>                              
                            </div>
                            })}

                {dataTablaqueso.map(function (dataProducts){
                    return <div>
                                <Tablaqueso product={dataProducts.products}/>                              
                            </div>
                        })}

              </div> 
    }
}


export default Family