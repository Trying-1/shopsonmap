import React from 'react'
import SearchBar from "./SearchBar"
import "../styles/Sidebar.css"
import PriceRangeSlider from './PriceRangeSlider'
import RatingsSlider from './RatingsSlider'
import CategorySelector from './CategorySelector'
function Sidebar() {
    const getcheckedItemFromsSelector = (data) => {
        console.log(`data recieved from child to parent${data}`)
    }
    return (
        <div className='side-bar brs-5 bx-shd'>
            <SearchBar />
            <CategorySelector getCheckedItem={getcheckedItemFromsSelector} />
            <PriceRangeSlider />
            <RatingsSlider />

        </div>
    )
}

export default Sidebar