import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-1 item">
                                <div className="col-6 p-0">
                                    <p className="col-12 text-left p-0 mb-0">{product.name}</p>
                                    <small className="col-12 text-left p-0">{product.description}</small>
                                </div>
                                {/* <small className="col-auto text-right mb-0">{product.country}</small> */}
                                <small className="col-2 text-right mb-0">{product.cl}{product.cl?'cl':''}</small>
                                <p className="col-2 text-right mb-0">{product.price}</p>
                                <p className="col-2 text-right mb-0">{product.price2}</p>
                            </div>
                    })}   
                </div>
        }
}
                
export default Family