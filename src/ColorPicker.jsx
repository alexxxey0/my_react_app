import React, { useState } from 'react'
import Button from './Button.jsx';

function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF');

    function handleColorChange(event) {
        setColor(event.target.value);
        document.getElementById('background').style.backgroundColor = event.target.value;
    }

    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div id='background' className='border-black border-4 rounded-md w-[300px] h-[300px] flex flex-row justify-center items-center transition-all'>
                <h2 className='text-2xl'><span className='font-bold'>Color:</span> {color}</h2>
            </div>
            <div className='flex flex-row items-center gap-x-4'>
                <label className='font-bold text-lg' htmlFor="color_select">Select color:</label>
                <input type="color" name="color_select" id="" onChange={handleColorChange} />
            </div>
        </div>
    );
}

export default ColorPicker