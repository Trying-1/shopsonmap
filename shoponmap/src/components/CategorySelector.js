import React, { useState } from 'react';
import shopcategories from "../data/shopcategories.json"
import "../styles/CategorySelector.css"
function CategorySelector() {
    const categories = shopcategories;
    const [checkedItem, setCheckedItem] = useState([])
    const handleCheckBox = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setCheckedItem([...checkedItem, value])
        }
        else {
            setCheckedItem(checkedItem.filter(item => item !== value))
        }
        
    }
    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <input
                        type="checkbox"
                        id={category.value}
                        name={category.name}
                        value={category.value}
                        onChange={handleCheckBox}
                        className="category"
                    />
                    <label htmlFor={category.value} className="category">
                        {category.name}
                    </label>
                </div>
            ))}
            {/* <p>Checked Checkboxes: {checkedItem.join(', ')}</p> */}

        </div>
    );
}

export default CategorySelector;
