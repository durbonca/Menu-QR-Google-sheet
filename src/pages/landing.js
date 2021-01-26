import React from "react"

class Landing extends React.Component{
    render(){
        return(
            <div className="d-flex flex-wrap vh-100 align-items-start justify-content-center">
                <img className="col-12 h-25" 
                     alt="Baco logo" 
                     src={process.env.PUBLIC_URL + "logo-baco.svg"} />
                <a
                className="btn btn-data col-10 col-md-5 h-25 | 
                d-flex justify-content-center align-items-center | 
                mx-3 overflow-hidden rounded"
                style={{backgroundColor: "#732619"}}
                href={process.env.PUBLIC_URL + "/home"}
                >
                    <div
                        className="d-flex justify-content-center items-center | sm:h-1/5 "
                        style={{backgroundColor: "#732619"}}
                    >
                        <h1 className="text-white text-xl">Carta QR</h1>
                    </div>
                </a>
                <a className="btn btn-data col-10 col-md-5 h-25 | 
                d-flex justify-content-center align-items-center | 
                mx-3 overflow-hidden rounded"
                style={{backgroundColor: "#732619"}}
                href="https://baco.rest/" >
                    
                    <div
                        className="d-flex justify-content-center items-center"
                        style={{backgroundColor: "#732619"}}
                    >
                        <h1 className="text-white text-xl">Delivery</h1>
                    </div>
                </a>
            </div> 
        )
    }
}

export default Landing