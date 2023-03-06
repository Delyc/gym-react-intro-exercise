import Button from "./Exercise3/Button";
import { useState } from "react";
import Home from "./Home";
const Exercise7 = () => {
    const [firstName, setFirstName] = useState()
    const handleChange = (e) => {
        setFirstName(e.target.value)
    }
   
    const [lastName, setLastName] = useState()
    const handleChangeSecond = (e) => {
        setLastName(e.target.value)
    }
    const greetMe = () => {
        alert(`Hello ${firstName} ${lastName}` )
    }
    return ( 
        <>
        <form className="flex flex-col gap-3 w-80">
            <input className="outline-none border border-gray-100 py-2 px-10 rounded" placeholder="Fist Name" onChange={handleChange}/>
            <input className="outline-none border border-gray-100 py-2 px-10 rounded" placeholder="Second Name" onChange={handleChangeSecond}/>
            <Button handleClick={greetMe} text="Greet me"/>
        </form>
        </>
     );
}
 
export default Exercise7;