import React, {useState, useEffect} from "react"
import Product from './Product'
import {Link} from 'react-router-dom'
import Bars from "./bars";
import PuntoCarne from "./puntoCarnes" 
import Chesse from "./Chesse"
import { sanitizedCategories } from "../utils/bussiness.js"
import Loading from '../components/loading/'

function Family (){
    
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr")
        .then(res => res.json())
        .then(
          (result) => {
            const sanitizedCat = sanitizedCategories(
                result.map(obj => obj)
              )
              setIsLoaded(true)
              setItems(sanitizedCat)
            });
    }
    ,[]) 

      return (
        <>
        { !isLoaded ? <Loading/> : 
            <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {items.map(function (dataProducts){
                    return  <div>
                                { dataProducts.title === 'Café de Grano' && <Chesse /> }

                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/> 
                                    <h3 className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                </div>
                                    <p><i>{dataProducts.description}</i></p>
                                <Product product={dataProducts.products}/>

                                { dataProducts.title === 'Carnes' && <PuntoCarne/> }
                            </div> 
                })}
              </div> }
        </>
        )
}
export default Family