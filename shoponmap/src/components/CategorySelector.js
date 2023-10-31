import React from 'react';
import shopcategories from "../data/shopcategories.json"
import "../styles/CategorySelector.css"
function CategorySelector() {
    const categories = shopcategories;
    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <input
                        type="checkbox"
                        id={category.value}
                        name={category.name}
                        value={category.value}
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
