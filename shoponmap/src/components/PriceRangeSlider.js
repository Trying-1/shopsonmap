import React, { useState } from 'react';

function PriceRangeSlider() {
  const [currentValue, setCurrentValue] = useState(0);

  const minLabel = "$5";
  const maxLabel = "$100";

  const handleSliderChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div className="price-range-slider">
      <input
        type="range"
        id="slider"
        min={5}
        max={100}
        step={1}
        value={currentValue}
        onChange={handleSliderChange}
      />
      <p>Min: {minLabel}</p>
      <p>Max: {maxLabel}</p>
      <p>Current: ${currentValue}</p>
    </div>
  );
}

export default PriceRangeSlider;
