import React from "react"
import dataTablaqueso from '../data/DataTablaqueso';
import Product from './Product'

class Tablaqueso extends React.Component{
    render (){
      return  <div>                
                {dataTablaqueso.map(function (Tablaqueso){
                    return  <div className="">
                                <Product product={Tablaqueso.products}/>
                            </div> 
                })}
              </div> 
    }
}

export default Tablaqueso