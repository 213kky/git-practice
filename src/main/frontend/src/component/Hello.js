import { useState } from "react";
import World from "./World";
import UserName from "./UserName";
export default function Hello({age}){

    
    // console.log(props);
    const [name, setName] = useState("Mike");
    // const [age, setAge] = useState({age});
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
    

    return (
        <div>
            
            <h2>
                {name}({age}) :{msg}
            </h2>
            <UserName name={name}/>
            <button onClick={()=>{
                setName(name ==="Mike" ? "June" : "Mike");
                // setAge(age+1);
            }}>changeName</button>
        </div>
    
    );
}