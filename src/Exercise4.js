import { useState } from "react";
import Button from "./Exercise3/Button";
import Home from "./Home";
const Exercise4 = () => {
    const [counter, setCounter] = useState(0)
    const handleCount = () => {
        setCounter(counter+1)
    }
    return ( 
        <>
        <Home />
        <p>Button has been clicked: {counter} times</p>
        <Button handleClick={handleCount} text="click me" />
    
        </>
     );
}
 
export default Exercise4;