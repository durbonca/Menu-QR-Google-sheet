import React from "react"
import dataCoffe from '../data/dataCoffe';
import Product from './Product'
import Bars from './bars'

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
        fetch("https://bc-backend-prod.herokuapp.com/product-categories/?rest.rest_id_eq=bc-qr&title_eq=Caf%C3%A9%20de%20Grano")
          .then(res => res.json())
          .then(
            (result) => {
                result.sort(((a, b) => a.price_in_cent - b.price_in_cent));
                this.setState({
                    isLoaded: true,
                    items: result
                  });
              });
      }

    render (){
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                {this.state.items.map(function (dataProducts){
                    return <div>
                                <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/>
                                    <h3 className="col-auto text-center">{dataProducts.title}</h3>
                                    <Bars/>
                                    <p><i>{dataProducts.description}</i></p>
                                </div>
                                <Product product={dataProducts.products}/>
                            </div>
                })}
              </div> 
    }
}


export default Family