import React from "react"
import Bars from './bars'
import Product from './Product'
import { sanitizedCategories } from "../utils/bussiness.js"

class Family extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr&title_eq=Quesos")
          .then(res => res.json())
          .then(
            (result) => {
                /* result.sort(((a, b) => a.price_in_cent - b.price_in_cent)); */
                const sanitizedCat = sanitizedCategories(
                  result.map(obj => obj)
                )
                this.setState({
                    isLoaded: true,
                    items: sanitizedCat
                  });
              });
      }

    render (){
      return  <div>
                {this.state.items.map(function (dataProducts){
                    return  <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/> 
                                    <h3 className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                </div>
                                    <p><i>{dataProducts.description}</i></p>
                                <Product product={dataProducts.products}/>                            
                            </div>
                            })}
              </div> 
    }
}


export default Family