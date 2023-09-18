import React from 'react'
import { MainCard } from '../components/MainCard/MainCard'
import FiltersBar1 from '../components/FiltersBar/FiltersBar1'
import AsyncSelectWithFiltersBar from '../components/FiltersBar/FiltersBar1'

const Catalogue = () => {
  return (
    <div>

    {/* <FiltersBar1/> */}
    <AsyncSelectWithFiltersBar/>
    <MainCard/>
    
        
   </div>
  )
}

export default Catalogue