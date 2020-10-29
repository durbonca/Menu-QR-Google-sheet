import React from "react"

class Family extends React.Component {
    
    render (props){
        return  <div>
                  {this.props.product.map(function (family){ 
                    return  <div><div className="col-12 text-left" style={{color:"rgb(206, 50, 26)"}}>{family.title}</div>
                    { family.products.map(function(item)  
                      { return  <div className="row d-flex align-items-center mt-1 item">
                                    <div className="col-6 p-0">
                                        <p className="col-12 text-left p-0 mb-0">{item.name} <small className="col-12 text-right mt-0 p-0"> {item.description}</small></p>
                                    </div>
                                    <small className="col-4 p-0 text-right mb-0">{item.cl}{item.cl?'cl':''}</small>
                                    <p className="col-2 p-0 text-right mb-0">{item.price}</p>
                                </div>
                                
                        }) 
                        }
                    </div>
                    }  
                  )
                }
                </div> 
        }
}
                
export default Family