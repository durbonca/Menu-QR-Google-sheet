import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-3 item">
                                <h4 className="col-8 text-left">{product.name}</h4>
                                <h6 className="col-4 text-right">$ {product.price}</h6>
                                <span className="col-12">{product.description}</span>
                            </div>
                    })} 
                </div>
        }
}
                
export default Family