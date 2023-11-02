import React, { useState, useEffect } from 'react';
import shopcategories from "../data/shopcategories.json"
import "../styles/CategorySelector.css"
function CategorySelector(props) {
    
    //storing shop categories from the data file. which in this case is shopcategories.json
    const categories = shopcategories;

    //creating new state variable which stores the checked item, means those are checked will be stored in checkedItem
    const [checkedItem, setCheckedItem] = useState([]);

    // we define how our checkbox should function on change of the checked or unchecked
    const handleCheckBox = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setCheckedItem([...checkedItem, value])
        }
        else {
            setCheckedItem(checkedItem.filter(item => item !== value))
        }
    }
    useEffect(() => {
        props.getCheckedItem(checkedItem)
    }, [checkedItem, props])
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
        </div>
    );
}

export default CategorySelector;
