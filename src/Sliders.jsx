import React from 'react'

const Sliders = ( {images , currentIndex} ) => {
    return (
        <div className='slider__images'>
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                <img key={index} src={image} className='slider__image' />
            ))}
        </div>
    )
}

export default Sliders