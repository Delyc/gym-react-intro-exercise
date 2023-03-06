import List from "./List";

const Exercise6 = () => {
    const animals =  [
        {
            icon: "😀",
            text: "dog"
        },
        {
            icon: "😎",
            text: "cat"
        },
        {
            icon: "😣",
            text: "chicken"
        },
        {
            icon: "😶",
            text: "cow"
        },
        {
            icon: "😫",
            text: "sheep"
        },
        {
            icon: "🤐",
            text: "horse"
        },
    ] 

    return ( 
        <>
        <div className="flex flex-col gap-0">
            {animals.map((animal, index) => {
                return(
                    <List icon={animal.icon} value={animal.text} key={index}/>
                )
            })
            }
        </div>
        </>
     );
}
 
export default Exercise6;