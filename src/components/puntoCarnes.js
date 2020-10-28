import React from 'react'

class PuntoCarne extends React.Component{
    render(){
        return <div>
                    <div className="mt-2" style={{border:"solid #732619 2px", padding:"2px"}}>
                            <div style={{border:"solid #732619 2px"}}>
                                <h5 style={{color:"#732619"}}>Únicos Puntos de Cocción</h5>
                                <div className="row">
                                    <div className="col-4 d-flex flex-column">
                                        <h1 style={{marginTop:"-25px",color:"#732619"}}>.</h1>
                                        <p className="my-0">1/4 Sellado</p>
                                        <small>Bleu / Rare</small>
                                        <small>12 Min</small>
                                    </div>
                                    <div className="col-4 d-flex flex-column">
                                        <h1 style={{marginTop:"-25px",color:"#732619"}}>..</h1>
                                        <p className="my-0">Punto Baco</p>
                                        <small>Sugerido</small>
                                        <small>16 Min</small>
                                    </div>
                                    <div className="col-4 d-flex flex-column">
                                        <h1 style={{marginTop:"-25px",color:"#732619"}}>...</h1>
                                        <p className="my-0">1/2 Jugoso</p>
                                        <small>Saignant / Medium</small>
                                        <small>20 Min</small>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row d-flex mt-4 item">
                                <p className="col text-left mb-0">Más de Acompañamientos</p>
                                <p className="col-auto text-right mb-0">4.000</p>
                    </div>
                    <div className="row d-flex mt-1">
                                <p className="col text-left mb-0">Mix de Lechuga</p>
                                <p className="col-auto text-right mb-0">3.000</p>
                    </div>
               </div>
    }
}
export default PuntoCarne