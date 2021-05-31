import React from "react"

function FamiliaBar (props) {
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                
                <div>
                    <div className="row mt-5 mb-3 d-flex align-items-center">
                        <h3 className="col-12 mt-3 text-center" style={{color:"#CE321A"}}>{props.categoryName}</h3>
                        <h4 className="col-12 text-center">{props.descripcion}</h4>
                    </div>
                    <div className="row d-flex">
                        <div className="offset-8 col-2 px-0 text-right">{props.cl1}</div>
                        <div className="col-2 px-0 text-right">{props.cl2}</div>
                    </div> 
                </div>
              

                {props.items.map((product, index) => {
                    return  <div key={index} className="row d-flex align-items-center mt-1 item">
                                <div className="col-6 p-0">
                                    <p className="col-12 text-left p-0 mb-0">{product.titulo}</p>
                                </div>
                                <small className="col-2 p-0 text-right mb-0">{product.pais}</small>
                                <p className="col-2 p-0 text-right mb-0">{product.precio1}</p>
                                <p className="col-2 p-0 text-right mb-0">{product.precio2}</p>
                                <small className="col-12 text-left mt-0 p-0">{product.descripcion}</small>
                            </div> 
                    })} 

              </div> 
    }

export default FamiliaBar