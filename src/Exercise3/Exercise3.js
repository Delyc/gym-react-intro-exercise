import Button from "./Button";

const Exercise3 = () => {
    const buttons = [ "button 1", "button 2", "button 3"]

    const handleClick = (index) => {
        let clickedButton = index + 1
        alert(`You clicked on Button ${clickedButton}`)
    }
    return (
        <>
            <section>
                {buttons.map((button, index) => {
                    return (
                        <Button key={index} text={button} handleClick={() => handleClick(index)} />
                    )
                })}
            </section>
        </>
    );
}

export default Exercise3;