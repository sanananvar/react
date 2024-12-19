import React, { useState } from "react";

function HidTxt() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            {isVisible ? (
                <>
                    <button onClick={() => setIsVisible(false)}>Hide</button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio alias corrupti consectetur officia inventore aperiam fuga nam magnam nihil?
                    </p>
                </>
            ) : (
                <button onClick={() => setIsVisible(true)}>Show</button>
            )}
        </>
    );
}
export default HidTxt;
