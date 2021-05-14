import React from 'react'

class WinePromo extends React.Component {
    render() { 
            return  <div> 
                            <div className="mt-2" style={{border:"solid #732619 2px", padding:"2px"}}>
                                <div style={{border:"solid #732619 1px"}}>
                                    <h5>Se Puede Adquirir Nuestra Selección de Vinos en “Boutique Baco”</h5>
                                </div>
                            </div>
                            <img className="col-12 mt-3" src="../lol.png" alt="una copa de baco por favor"/>
                    </div>
            }
}

export default WinePromo