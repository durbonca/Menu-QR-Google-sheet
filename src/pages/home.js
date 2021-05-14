import React, {useState, useEffect} from "react"
import { sanitizedFatherCategories } from '../utils/bussiness'
import {Link} from "react-router-dom"
import Loading from '../components/loading/'
function Home (){

    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr")
          .then(res => res.json())
          .then(
            (result) => {
              const sanitizedCat = sanitizedFatherCategories(
                  result.map(obj => obj)
                )
                setIsLoaded(true)
                setItems(sanitizedCat)
              });
      }
      ,[])

        return( 

            <div className="vh-100">
                <img src={process.env.PUBLIC_URL + "logo-baco.svg"} alt="logo" className="col-10 h-50"/>
                {
                !isLoaded? <Loading/> :
                <div className="navLinks">
                {items.map((menuItem) => {
                        return (
                            <Link key={menuItem.slug} className="col-8 d-flex justify-content-center align-items-center btn btn-data rounded" to={`/menu/${menuItem.title}`}>
                                <div><p><strong>{menuItem.title}</strong></p></div>
                            </Link>
                        )}
                    )}
                </div>
                }
            </div> 
        )   
}
export default Home