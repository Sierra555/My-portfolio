import { useState, useRef } from 'react';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

const Slider = ({ cards, Component, sliderParam, cardParam }) => {
    const [cardIndex, setCardIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    function showPrevCard() {
        setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    function showNextCard() {
        const maxIndex = cards.length - cardParam.cardsToDisplay;
        setCardIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeDistance = touchStartX.current - touchEndX.current;

        if (swipeDistance > 50) {
            showNextCard();
        } else if (swipeDistance < -50) {
            showPrevCard();
        }
    };

    return(
        <div
            aria-label="Slider"
            style={{
                width: `${sliderParam.width}px`, 
                position: "relative", 
                overflow: "hidden", 
                display: 'flex',
                alignItems: 'center',
                gap:`${cardParam.gap}px`,
            }}
            className={'mt-5 p-[40px] mx-auto'}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
         > 
            <div
                style={{
                display: 'flex',
                alignItems: 'center',
                gap:`${cardParam.gap}px`,
                transition: 'transform 0.5s ease-in-out', 
                transform: `translateX(${
                    -(cardParam.width + cardParam.gap) * cardIndex
                }px)`,
                }}
            >
                {cards.map((card, index)=>
                    <Component 
                        key={card.name} 
                        index={index} 
                        {...card} 
                        cardsToDisplay={cardParam.cardsToDisplay}
                        cardWidth={`${cardParam.width}px`}
                    />
                 )}
            </div>
            {cardIndex > 0 && (
                <button 
                    onClick={showPrevCard}
                    aria-label="Previous Card"
                    style={{position: "absolute", left: 0}}
                    className='slider-btn'
                ><ArrowBigLeft aria-hidden/></button>
            )} 
            {cardIndex < cards.length - cardParam.cardsToDisplay && (
                <button 
                onClick={showNextCard}
                aria-label="Next Card"
                style={{position: "absolute", right: 0}}
                className='slider-btn'
            ><ArrowBigRight aria-hidden/></button>
            )}
        </div>
    )
}

export default Slider;
