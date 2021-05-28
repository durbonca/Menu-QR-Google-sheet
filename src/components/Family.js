import React, {useState, useEffect} from "react"
import Product from './Product'
import Bars from "./bars";
import PuntoCarne from "./puntoCarnes" 
import Chesse from "./Chesse"

function Family (props){
    
    console.log(props.items)
    
    return (
        <>
              
               {/*  {props.items.map(function (dataProducts, index){
                    return  <div key={index}>
                                { dataProducts.title === 'Café de Grano' && <Chesse /> }

                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/> 
                                    <h3 key={index} className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                </div>
                                    <p><i>{dataProducts.description}</i></p>
                                <Product key={dataProducts.slug} product={dataProducts.products}/>

                                { dataProducts.title === 'Carnes' && <PuntoCarne/> }
                            </div> 
                })} */}
      </>       
      )
}
export default Family