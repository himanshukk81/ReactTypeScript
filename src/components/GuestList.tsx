import React, { useState } from 'react';


export const GuestList: React.FC = () =>{

    const [name , setName ] = useState('');
    const [guests , setGuests] = useState([]);

    const onClick = () =>{
        console.log("Click console");
    };
    return <div>
        <h3>Hello</h3>
        <input value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
}