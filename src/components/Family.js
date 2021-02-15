import React from "react"
import Product from './Product'
import {Link} from 'react-router-dom'
import Bars from "./bars";
import PuntoCarne from "./puntoCarnes" 
import Chesse from "./Chesse"

class Family extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr")
          .then(res => res.json())
          .then(
            (result) => {
                /* for ( let i=0; i<result.length ; i++ ) {
                  console.log(result[i].products.price_in_cent)
                  result[i].products.sort(((a, b) => a.price_in_cent - b.price_in_cent));
                } */
                this.setState({
                    isLoaded: true,
                    items: result
                  });
              });
      }


    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>

                {this.state.items.map(function (dataProducts){
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
              </div> 
    }
}
export default Family