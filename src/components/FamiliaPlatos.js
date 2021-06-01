
import { Bars } from "./";

function FamiliaPlatos (items) {
    return (
        <>
            <div className="row mt-5 d-flex align-items-center">                               
                <Bars/> 
                    <h3 className="col-auto text-center">{items.categoryName}</h3>
                <Bars/>
            </div>
            <div className="row">
                <div className="offset-6 col-3 px-0 text-right">{items.cl1}</div>
                <div className="col-3 px-0 text-right">{items.cl2}</div>
            </div>

            { items.items.map( function (dataProducts, index){
                return  <div key={index}>
                            <div key={dataProducts.slug} className="row d-flex mt-1 item">
                                <p className="col text-left pl-0 mb-0">{dataProducts.titulo} </p>
                                <p className="col-3 pr-0 text-right mb-0">{dataProducts.precio1}</p>
                                {/* <p className="col-3 ml-auto pr-0 text-right mb-0">{dataProducts.precio2}</p> */}
                                <small className="text-left col-9">{dataProducts.descripcion}</small>
                            </div>
                        </div> 
                })
            } 
        </>       
      )
}
export default FamiliaPlatos