import React from 'react'
import Bars from "./bars"

class Ostras extends React.Component{
    render(){
        return <div>
                    <div className="row mt-5 d-flex align-items-center">                               
                                    <Bars/> 
                                    <h3 className="col-auto text-center">Ostras</h3>
                                    <Bars/>
                    </div>
                <div className="row d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center col-6 px-0">
                        <small>calibre</small>
                        <strong>“Mediano”</strong>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-end col-6 px-0">
                        <div className="d-flex">
                            <strong className="col mx-0 px-1">12</strong><p className="col mx-0 px-1"><small>Unidades</small></p><strong className="col mx-0 px-1">12.000</strong>
                        </div>
                        <div className="d-flex justify-">
                          <strong className="col mx-0 px-1">24</strong><p className="col mx-0 px-1"><small>Unidades</small></p><strong className="col mx-0 px-1">21.000</strong>
                        </div>
                    </div>
               </div>
            </div>
    }
}
export default Ostras