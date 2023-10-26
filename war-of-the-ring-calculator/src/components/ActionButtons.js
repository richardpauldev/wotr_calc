import React from 'react';

const ActionButtons = () => {
    const handleCalculate = () => {
        console.log("Calculate button clicked.")
    }

    const handlePressAttack = () => {
        console.log("Press Attack button clicked.")
    }

    const handleReset = () => {
        console.log("Reset button clicked. ")
    }

    return (
        <div className='action-buttons'>
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handlePressAttack}>Press the Attack</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default ActionButtons;