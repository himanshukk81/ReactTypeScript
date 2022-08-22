import { useState } from "react";

const users = [
    {name:'Himanshu' ,age:20 },
    {name:'Manoj' ,age:26 },
    {name:'prince' ,age:29 },
]

const UserSearch: React.FC = () =>{

    const [name , setName] = useState('');

    const [user, setUser] = useState<{name:string , age:number} | undefined>();
    const onclick = () =>{
        console.log("search");

        const foundUser = users.find((user)=>{
            return user.name === name;
        })
        setUser(foundUser);
        console.log(foundUser);
    }
    return <div>User Search

        <input value={name} onChange={e => setName(e.target.value)}  />

        <button onClick={onclick}>Find User</button>

        <div>
          {user && user.name}&nbsp; 
          {user && user.age}

          {!user && 'Not Found'}
        </div>
    </div>
}

export default UserSearch;