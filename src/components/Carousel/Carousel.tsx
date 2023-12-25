import React from 'react';
import './Carousel.css';

type CarouselProps = {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = () => {
    return (
        <div className={'carousel-root'}>
            <div className={'carousel-container'}>
                <img role="img" src="" alt=""/>
            </div>
            <button role="button" className={'button'}>Change</button>
        </div>
    );
};

export default Carousel;
