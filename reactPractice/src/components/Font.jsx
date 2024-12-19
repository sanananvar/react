import React, { useState } from 'react';

function Font() {
    const [fontSize, setFontSize] = useState(16);
    let intervalId = null;

    const handleMouseDown = () => {
        intervalId = setInterval(() => {
            setFontSize((prevFontSize) => prevFontSize + 2);
        }, 100); 
    };

    const handleMouseUp = () => {
        clearInterval(intervalId);
    };

    return (
        <>
            <p style={{ fontSize: `${fontSize}px` }}>Font</p>
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} 
            >
                artir
            </button>
            <button
                onClick={() => setFontSize(fontSize - 2)}
                disabled={fontSize <= 10}
            >
                azalt
            </button>
        </>
    );
}

export default Font;
