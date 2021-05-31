import { useEffect, useState } from 'react'
import { FamiliaPlatos } from '../components'
import { sanitizedCategories } from '../utils/bussiness'
import { Link } from 'react-router-dom'

export default function Platos() {

    const [items, setItems] = useState([])
    

    useEffect(() => {
        const GSheetReader = require('g-sheets-api');
        const options = {
          sheetId: '161qN9zp3vGNAT_K-iZ1RYl2hTLhyvOcrCa94RiYMHiY',
          sheetNumber: 1,
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
        <div>
            <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
            <Link className="btn backButtom" to="/https://api.whatsapp.com/send?phone=56940574486&text=Hola!%20Quisiera%20hacer%20mi%20pedido!"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {
                    items.map((props, index)=> <FamiliaPlatos key={index} {...props}/>)
                }
            </div>
        </div>
    )
}