import React, {useState, useEffect} from "react"
import { sanitizedFatherCategories } from '../utils/bussiness'
import {Link} from "react-router-dom"

function Home (){

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr&parent_category_null=true")
          .then(res => res.json())
          .then(
            (result) => {
              const sanitizedCat = sanitizedFatherCategories(
                  result.map(obj => obj)
                )
                setItems(sanitizedCat)
              });
      }
      ,[])

        return(
            <div className="vh-100">
                <img src={process.env.PUBLIC_URL + "logo-baco.svg"} alt="logo" className="col-10 h-50"/>
                
                <div className="navLinks">
                {items.map((menuItem) => {
                    return (
                        <Link key={menuItem.slug} className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to={`/menu/${menuItem.title}`}>
                            <div><p><strong>{menuItem.title}</strong></p></div>
                        </Link>
                    )}
                )}
                </div>
            </div> 
        )   
}
export default Home