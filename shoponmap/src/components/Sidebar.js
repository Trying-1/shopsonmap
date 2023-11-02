import React, { useState } from 'react'
import SearchBar from "./SearchBar"
import "../styles/Sidebar.css"
import PriceRangeSlider from './PriceRangeSlider'
import RatingsSlider from './RatingsSlider'
import CategorySelector from './CategorySelector'
import SelectedCategory from './SelectedCategory'
function Sidebar() {
    const [itemChecked, setItemChecked] = useState([])
    const getcheckedItemFromsSelector = (data) => {
        setItemChecked(data)
        console.log(itemChecked)
    }
    return (
        <div className='side-bar brs-5 bx-shd'>
            <SearchBar />
            <CategorySelector getCheckedItem={getcheckedItemFromsSelector} />
            <SelectedCategory data={itemChecked} />
            <PriceRangeSlider />
            <RatingsSlider />
        </div>
    )
}

export default Sidebar