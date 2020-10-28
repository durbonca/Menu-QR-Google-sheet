import React from "react"

class Bars extends React.Component {
    render(){
        return <div className="col">
                    <hr style={{borderTop: "1px solid #4B4C5B;", marginBottom: "-15px"}}/>
                    <hr style={{borderTop: "2px solid #A73434", marginBottom: "-15px"}}/>
                    <hr style={{borderTop: "2px solid #4B4C5B", marginBottom: "-14px"}}/>
                    <hr style={{borderTop: "4px solid #A73434", marginBottom: "-14px"}} />
                    <hr style={{borderTop: "2px solid #4B4C5B", marginBottom: "-15px"}} />
                    <hr style={{ borderTop: "2px solid #A73434", marginBottom: "-15px"}} />
                    <hr style={{borderTop: "1px solid #4B4C5B;"}} />
                </div>
    }
}

export default Bars