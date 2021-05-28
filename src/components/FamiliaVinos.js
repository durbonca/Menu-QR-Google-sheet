import React from "react"

function FamiliaVinos (items) {
    console.log(items)
        return (
                <div>
                    <div className="row mt-5 d-flex">
                        <h3 style={{color:"#ce321a"}} className="col-12 text-center">{items.categoryName}</h3>
                        <p className="col-12 text-center"><i className="small">{items.descripcion}</i></p>
                    </div>
                    <div className="row d-flex justify-content-end">
                        {/* <span style={{fontSize:"25px"}} className="col-2 p-0 emoji" role="img" aria-label={""}>🍷</span> */}
                        <span style={{fontSize:"25px"}} className="col-2 p-0 emoji" role="img" aria-label={""}>🍾</span>
                    </div>
                    
                    {
                        items.items.map((product)=> {
                        
                        let cup;
                        if (product.precio1){
                            cup = <div className="col-2">🍷</div>
                        }else{
                            cup = <div className="col-2"></div>
                        }

                        return ( 
                                <div className="row d-flex mt-1 item">
                                    <p className="col-6 text-left m-0 p-0">{product.titulo} <small className="col-auto text-right mr-0 p-0">{product.descripcion}</small></p>
                                    <div className="col-6 d-flex">
                                    {cup}
                                    <p className="col-4 text-right mb-0 ml-2 mr-2 p-0">{product.precio1}</p>
                                    <p className="col-5 text-right mb-0 ml-2 p-0">{product.precio2}</p>
                                    </div>
                                    <small className="col-12 text-center">{product.pais}</small>
                                </div>
                        )})
                    }
                </div>
             )
}


export default FamiliaVinos