import profile_picture from './assets/anime_profile_picture.jpg';
import Button from './Button.jsx';
import React, {useState} from 'react';

function Card(props) {

    const [respect, setRespect] = useState(0);

    const increaseRespect = () => {
        setRespect(respect + 1);
    }

    const decreaseRespect = () => {
        setRespect(respect - 1);
    }

    return (
        <div className='flex flex-col p-8 border-red-500 border-4 shadow-md rounded-md items-center'>
            <img className='w-[200px] h-[200px]' src={props.profile_picture} alt="profile picture" />
            <h2 className='font-bold text-2xl mt-2'>{props.name}</h2>
            <p>{props.description}</p>
            <Button text={"+ Respect for " + props.name} onclick={increaseRespect}></Button>
            <Button text={"- Respect for" + props.name} onclick={decreaseRespect}></Button>
            <h2>{props.name + "'s"} respect: <span>{respect}</span></h2>
        </div>
    );
}

export default Card