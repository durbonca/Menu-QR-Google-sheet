import { useEffect, useState } from 'react'
import { FamiliaBar, Loading } from '../components'
import { sanitizedCategories } from '../utils/bussiness'
import { Link } from 'react-router-dom'

export default function Bar() {

    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const GSheetReader = require('g-sheets-api');
        const options = {
          sheetId: '105CwjCT4ocNcCZXeTzmWejPGpG_JOX3moE-aVixp2v4',
          sheetNumber: 3,
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
            <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
            { isLoaded ?
            <>
              <h1 className="mt-5 mb-3">BAR</h1> 
                
                {
                    items.map((props, index)=> <FamiliaBar key={index} {...props}/>)
                }
            </>
             : <Loading/> }
        </>
    )
}