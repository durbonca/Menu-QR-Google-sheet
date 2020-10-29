import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-1 item">
                                <p className="col-4 p-0 text-left mb-0">{product.name}</p>
                                <small className="col-2 p-0">{product.description}</small>
                                <small className="col-2 p-0">{product.country}</small>
                                <small className="col-2 p-0">{product.gr}{product.gr?'Gr':''}</small>
                                <p className="col-2 p-0 text-right mb-0">{product.price}</p>
                            </div>
                    })} 
                </div>
        }
}
                
export default Family