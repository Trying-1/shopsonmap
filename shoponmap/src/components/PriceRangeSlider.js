import React, { useState } from 'react';
import "../styles/Slider.css"
function PriceRangeSlider() {
  const [currentValue, setCurrentValue] = useState(0);

  const minLabel = "$5";
  const maxLabel = "$100";

  const handleSliderChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div className="range-slider">
      <input
        className='slider'
        type="range"
        id="slider"
        min={5}
        max={100}
        step={1}
        value={currentValue}
        onChange={handleSliderChange}
      />
      <p className='min-value slider-values'>{minLabel}</p>
      <p className='max-value slider-values'>{maxLabel}</p>
      <p className='current-value slider-values'>${currentValue}</p>
    </div>
  );
}

export default PriceRangeSlider;
