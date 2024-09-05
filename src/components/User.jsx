import { useEffect, useState } from "react";

const User = (props)=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    const {name,location,contact} = props;
    return <div className="user-card">
        <h1>Count={count}</h1>
        <h2>Count2={count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: {contact}</h4>
    </div>
}

export default User;