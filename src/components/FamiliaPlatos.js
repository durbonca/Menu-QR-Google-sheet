
import { Bars } from "./";
import PuntoCarne from "./puntoCarnes" 

function FamiliaPlatos (items) {
    return (
        <>
            <div className="row mt-5 d-flex align-items-center">                               
                <Bars/> 
                    <h3 className="col-auto text-center">{items.categoryName}</h3>
                <Bars/>
            </div>

            { items.items.map( function (dataProducts, index){
                return  <div key={index}>
                            <div key={dataProducts.slug} className="row d-flex mt-1 item">
                                <p className="col text-left pl-0 mb-0">{dataProducts.titulo} <small className="col-12">{dataProducts.descripcion}</small></p>
                                <p className="col-auto pr-0 text-right mb-0">{dataProducts.precio1}</p>
                                <p className="col-auto ml-auto pr-0 text-right mb-0">{dataProducts.precio2}</p>
                            </div>
                        </div> 
                })
            } 
            { items.categoryName === 'Carnes' && <PuntoCarne/> }
        </>       
      )
}
export default FamiliaPlatos