import { useEffect, useState } from 'react'
import { FamiliaPlatos, WhatsappIcon } from '../components'
import { sanitizedCategories } from '../utils/bussiness'

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
          },
          error => {
            console.error(error)
          })
      }
      ,[])
    
    return (
        <div>
            <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
                {
                    items.map((props, index)=> <FamiliaPlatos key={index} {...props}/>)
                }
            </div>

            <a
                href="https://api.whatsapp.com/send?phone=56940574486&text=Hola!%20Quisiera%20hacer%20mi%20pedido!"><span className="emoji" role="img" aria-label={""}>
                 <WhatsappIcon text="HACER MI PEDIDO!" /> 
            </span></a>

        </div>
    )
}