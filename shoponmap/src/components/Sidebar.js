import React from 'react'
import SearchBar from "./SearchBar"
import "../styles/Sidebar.css"
import PriceRangeSlider from './PriceRangeSlider'
import RatingsSlider from './RatingsSlider'
import CategorySelector from './CategorySelector'
function Sidebar() {
    return (
        <div className='side-bar brs-5 bx-shd'>
            <SearchBar />
            <CategorySelector/>
            <PriceRangeSlider />
            <RatingsSlider />

        </div>
    )
}

export default Sidebar