import React from 'react'
import SearchBar from "./SearchBar"
import "../styles/Sidebar.css"
import PriceRangeSlider from './PriceRangeSlider'
function Sidebar() {
    return (
        <div className='side-bar brs-5 bx-shd'>
            <SearchBar/>
            <PriceRangeSlider/>
        </div>
    )
}

export default Sidebar