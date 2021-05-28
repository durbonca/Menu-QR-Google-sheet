import { useEffect, useState } from 'react'
import { Family, Loading } from '../components'
import { sanitizedCategories } from '../utils/bussiness'
import {Link} from 'react-router-dom'

export default function Platos() {

    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const GSheetReader = require('g-sheets-api');
    
        const options = {
          sheetId: '105CwjCT4ocNcCZXeTzmWejPGpG_JOX3moE-aVixp2v4',
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
      console.log(items)
    return (
        <div>
            {isLoaded ?
            <div className="container-fluid offset-md-3 col-md-6 mt-5 mb-5 px-4">
            <Link className="btn backButtom" to="/home"><span className="emoji" role="img" aria-label={""}>🔙</span></Link>
                {
                    items.map((props)=> <Family {...props}/>)
                }
            </div>    
            :
            <Loading/>
            }
        </div>
    )
}