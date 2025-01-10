import { useState, useRef } from 'react';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';

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
        <MotionConfig transition={{duration: .5, ease: 'easeInOut' }}> 
            <div
                aria-label="Slider"
                className={'relative flex'}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            > <div 
                   style={{width: `${sliderParam.width}px`, padding: `${cardParam.gap}px`}}
                   className={`overflow-hidden flex mt-5 mx-auto`}
                >
                <motion.div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap:`${cardParam.gap}px`,
                    }}
                    animate={{x: `-${(cardParam.width + cardParam.gap) * cardIndex}px`}}
                >
                    {cards.map((card, index)=>
                        <Component 
                            key={card.name} 
                            index={index} 
                            {...card} 
                            cardWidth={`${cardParam.width}px`}
                        />
                    )}
                </motion.div>
                </div>
                <AnimatePresence initial={false}>
                    {cardIndex > 0 && (
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 0.1 }}
                            exit={{ opacity: 0, pointerEvents: 'none' }}
                            whileHover={{ opacity: 1 }}
                            whileFocus={{ opacity: 1 }}
                            onClick={showPrevCard}
                            aria-label="Previous Card"
                            className='absolute top-1/2 left-0 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200 border border-gray-100'
                            tabIndex={1}
                        ><ArrowBigLeft aria-hidden/></motion.button>
                    )} 
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {cardIndex < cards.length - cardParam.cardsToDisplay && (
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 0.1 }}
                            exit={{ opacity: 0, pointerEvents: 'none' }}
                            whileHover={{ opacity: 1 }}
                            whileFocus={{ opacity: 1 }}
                            onClick={showNextCard}
                            aria-label="Next Card"
                            className='absolute top-1/2 right-0	-mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200 border border-gray-100'
                            tabIndex={1}
                    ><ArrowBigRight aria-hidden/></motion.button>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    )
}

export default Slider;
