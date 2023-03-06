import Home from "./Home";

const Exercise2 = () => {
    const handleClick = ()=> {
        alert("Clicked")
    }
    return (
        <>
        <Home />
        <h1>Clicks</h1>
        <button onClick={handleClick} className="bg-blue-600 px-5 py-2 rounded text-white">Click me</button>
        </>
      );
}
 
export default Exercise2;