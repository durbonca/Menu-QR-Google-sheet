import React from 'react'

class Ostras extends React.Component{
    render(){
        return <div className="row d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center col-6 px-0">
                        {/* <h1>Ostras</h1> */}
                        <small>calibre</small>
                        <strong>“Victoria”</strong>
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
    }
}
export default Ostras