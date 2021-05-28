import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                 {this.props.product.map(function (product){ 
                    return <div>
                     { product.visible &&
                          <div key={product.slug} className="row d-flex mt-1 item">
                                <p className="col text-left pl-0 mb-0">{product.name} <small className="col-12">{product.description}</small></p>
                                <p className="col-auto pr-0 text-right mb-0">{new Intl.NumberFormat('ca-ES').format(product.price_in_cent)}</p>
                            </div>
                           }
                        </div>
                })} 
                </div>
        }
}
                
export default Family