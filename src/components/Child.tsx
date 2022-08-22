import React from 'react';

interface Childprops {
    name :string;
}

export const ChildAsFC: React.FC<Childprops> = (props) =>{
    return <div>{props.name}</div>
}