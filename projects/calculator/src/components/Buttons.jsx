import React from 'react';

function Buttons() {
    const buttons = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
    
    return (
        <div className='p-4 m-4'>
            <div className="buttonContainer flex flex-wrap gap-2 max-w-[300px]">
                {buttons.map((button) => (
                    <button key={button} className='p-3 m-2 shadow-lg rounded-md'>{button}</button>
                ))}
            </div>
        </div>
    );
}

export default Buttons;
