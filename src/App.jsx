import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import ColorPicker from './ColorPicker.jsx';
import ToDoList from './ToDoList.jsx';

import ciepa_picture from './assets/ciepa_picture.jpg';
import alisa_picture from './assets/alisa_picture.jpg';
import brendon_picture from './assets/brendon_picture.jpg';
import react_logo from './assets/react.svg';

import React, {useState, useEffect} from 'react';

function App() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleWindowResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    }, []);

    return (
        <main className='my-8'>
            <div className='flex flex-col gap-y-2 items-center mt-8 mb-8'>
                <img className='w-[15%]' src={react_logo} alt="React Logo" />
                <h1 className='text-center font-bold text-6xl text-[#61DBFB]'>REACT DEMO</h1>
            </div>
            
            <div className='w-full h-[30px] bg-[#61DBFB]'></div>

            <div className='flex flex-col items-center gap-y-4'>
                <div className='flex flex-row gap-x-24 justify-center mt-8 mb-8'>
                    <div className='flex flex-col gap-y-8'>
                        <h1 className='text-4xl font-bold text-center'>Color picker</h1>
                        <ColorPicker></ColorPicker>
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        <h1 className='text-4xl font-bold text-center'>To-Do list</h1>
                        <ToDoList></ToDoList>
                    </div>
                </div>

                <div>
                    <p className='text-xl'><span className='font-bold'>Window size:</span> {width}px x {height}px</p>
                </div>
            </div>
        </main>
    );
}

export default App
