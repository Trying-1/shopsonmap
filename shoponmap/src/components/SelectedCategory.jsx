import React from 'react'

function SelectedCategory({data}) {
    const itemChecked=data;
    
    return (
        <div>
            {
            itemChecked.map(item=>(
                <li>{item}</li>
            ))
            }
        </div>
    )
}

export default SelectedCategory