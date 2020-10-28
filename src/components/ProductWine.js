import React from "react"

class Family extends React.Component {
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return  <div className="row d-flex mt-1 item">
                                <p className="col-6 text-left m-0 p-0">{product.name} <small className="col-auto text-right mr-0 p-0">{product.country}</small></p>
                                <div class="col-6 d-flex">
                                 <p className="col-6 text-right mb-0 ml-2 p-0">{product.price}</p>
                                <p className="col-6 text-right mb-0 ml-2 p-0">{product.price2}</p>
                                </div>
                                <small className="col-auto text-left">{product.description}</small>
                            </div>
                    })} 
                </div>
        }
}
                
export default Family