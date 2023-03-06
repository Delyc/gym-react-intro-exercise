
const Exercise2 = () => {
    const handleClick = () => {
        alert("Clicked")
    }
    return (
        <>
            <section>
                <h1>Clicks</h1>
                <button onClick={handleClick} className="bg-blue-600 px-5 py-2 rounded text-white">Click me</button>
            </section>
        </>
    );
}

export default Exercise2;