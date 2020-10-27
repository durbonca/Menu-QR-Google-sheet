import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-1 item">
                                <p className="col text-left mb-0">{product.name} <small className="col-12">{product.description}</small></p>
                                <p className="col-auto text-right mb-0">{product.price}</p>
                            </div>
                    })} 
                </div>
        }
}
                
export default Family