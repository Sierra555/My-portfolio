import { useState, useEffect } from 'react';

const FlashLight = ({containerRef}) => {
    const [pointerPosition, setPointerPosition] = useState({x: -10000, y: -10000});

    useEffect(() => {
        const container = containerRef.current;
        const handlePointerMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setPointerPosition({x, y});
        };

        container.addEventListener('pointermove', handlePointerMove);

        return () => {
            container.removeEventListener('pointermove', handlePointerMove);
        }
    }, [containerRef]);

    return (
        <div 
        className="flashlight"
        style={{
            top: pointerPosition.y - 150,
            left: pointerPosition.x - 150,
            zIndex: 10
        }}></div>
    )
}

export default FlashLight;