import Button from "./Button";
import Home from "../Home";

const Exercise3 = () => {
    const buttons = [
        {
            text: "button 1",

        }, {
            text: "button 2",

        }, {
            text: "button 3",

        },

    ]

    const handleClick = (index) => {
        let clickedButton = index + 1
        alert(`You clicked on Button ${clickedButton}`)
    }
    return (
        <>
        <Home />
            {buttons.map((button, index) => {
                return (
                    <Button key={index} text={button.text} handleClick={()=>handleClick(index)}/>
                )
            })}
        </>
    );
}

export default Exercise3;