import React, { useState } from 'react';

function A() {
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [text, setText] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);
        setShowB(true);
        setShowC(true);
    };

    return (
        <div className="App">
        <input type="text" onChange={handleInputChange} />
        {showB && <B text={text} />}
        {showC && <C text={text} />}
        </div>
    );
}

export default A;
