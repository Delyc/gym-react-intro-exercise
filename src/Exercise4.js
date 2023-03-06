import { useState } from "react";
import Button from "./Exercise3/Button";
const Exercise4 = () => {
    const [counter, setCounter] = useState(0)
    const handleCount = () => {
        setCounter(counter+1)
    }
    return ( 
        <>
        <section >
        <p>Button has been clicked: {counter} times</p>
        <Button handleClick={handleCount} text="click me" />
        </section>
    
        </>
     );
}
 
export default Exercise4;