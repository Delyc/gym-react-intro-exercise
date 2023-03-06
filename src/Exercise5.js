import Home from "./Home";
const Exercise5 = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return ( 
        <>

        <Home />
        <ul>
        {animals.map((animal, index) => {
            return(
            <li key={index}>{animal}</li>
            )
        })}
        </ul>
        </>
     );
}
 
export default Exercise5;