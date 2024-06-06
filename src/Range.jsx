import React from 'react'
import './index.css';

const Range = ( {handleChange, currentIndex, rangeLevel} ) => {
    return (
        <div className="input-scroll">
            <input
                type="range"
                className="slider-scroll"
                value={currentIndex}
                min={0}
                max={rangeLevel}
                step={3}
                onChange={handleChange}
            />
        </div>
    )
}

export default Range