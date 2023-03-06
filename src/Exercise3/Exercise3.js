import Button from "./Button";

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
            <section>
                {buttons.map((button, index) => {
                    return (
                        <Button key={index} text={button.text} handleClick={() => handleClick(index)} />
                    )
                })}
            </section>
        </>
    );
}

export default Exercise3;