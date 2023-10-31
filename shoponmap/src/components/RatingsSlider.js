import React, { useState } from 'react';
import "../styles/Slider.css"
function RatingsSlider() {
    const [currentValue, setCurrentValue] = useState(0);

    const minLabel = "0#";
    const maxLabel = "5#";

    const handleSliderChange = (event) => {
        setCurrentValue(event.target.value);
    };

    return (
        <div className="range-slider">
            <input
                className='slider'
                type="range"
                id="slider"
                min={0}
                max={5}
                step={1}
                value={currentValue}
                onChange={handleSliderChange}
            />
            <p className='min-value slider-values'>{minLabel}</p>
            <p className='max-value slider-values'>{maxLabel}</p>
            <p className='current-value slider-values'>{currentValue}#</p>
        </div>
    );
}

export default RatingsSlider;
