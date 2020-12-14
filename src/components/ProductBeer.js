import React from "react"

class ProductBeer extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-1 item">
                                <p className="col text-left pl-0 mb-0">{product.name} <small className="col-12">{product.description}</small></p>
                                <p className="col-auto pr-1 text-right mb-0">{product.price2}</p>
                                <p className="col-auto pr-1 text-right mb-0 pl-4 mr-2">{product.price}</p>
                            </div>
                    })} 
                </div>
        }
}
                
export default ProductBeer