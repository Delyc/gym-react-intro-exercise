import Home from "../Home";
import List from "./List";

const Exercise6 = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    return ( 
        <>
        <Home />
        <ul>
            {animals.map((animal, index) => {
                return(
                    <List value={animal} key={index}/>
                )
            })
            }
        </ul>
        </>
     );
}
 
export default Exercise6;