import { useEffect, useState } from 'react'
import { FamiliaVinos, WinePromo, Loading } from '../components'
import { sanitizedCategories } from '../utils/bussiness'
import { Link } from 'react-router-dom'

export default function Vinos() {

    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const GSheetReader = require('g-sheets-api');
        const options = {
          sheetId: '105CwjCT4ocNcCZXeTzmWejPGpG_JOX3moE-aVixp2v4',
          sheetNumber: 2,
          returnAllResults: true,
          filter: {},
          filterOptions: {}
        }
        
        GSheetReader(
          options,
          results => {
            const sanitizedItems = sanitizedCategories(
                  results.map(obj => obj)
                )
            setItems(sanitizedItems)
            setIsLoaded(true)
          },
          error => {
            console.error(error)
          })
      }
      ,[])    

    return (
        <>
            { isLoaded ?
            <>
            <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
            <h1 className="mt-5 mb-3">VINOS</h1> 
                <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                    <WinePromo/>
                    {
                        items.map((props)=> <FamiliaVinos {...props}/>)
                    }
                    <div className="mt-5" style={{border:"solid #732619 2px", padding:"2px"}}>
                        <div style={{border:"solid #732619 2px"}}>
                                <div className="row d-flex mt-1 p-1">
                                    <p className="col text-left mb-0">Servicio Descorche</p>
                                    <p className="col-auto text-right mb-0">$5.000</p>
                                    <small className="col-12">Por Botella o Por Comensal</small>
                                </div>
                        </div>
                    </div>
            </div>
            </>
             : <Loading/> }
        </>
    )
}