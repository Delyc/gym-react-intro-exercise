import ReactCardFlip from "react-card-flip";
import { useState } from "react";
const FlipCard = ({image, first_name, last_name, employment}) => {
    const [isFlipped, setIsflipped] = useState(false);
    function handleClick() {
        setIsflipped(!isFlipped);
    }

    return ( 
        <div className="border border-gray-300 px-20 py-5">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="bg-red-500">
            <div onMouseEnter={() => handleClick()}
                onMouseLeave={() => handleClick()}>
                <img src={image} alt= "Imag"/>
                <p>{first_name}</p>
                <p>{last_name}</p>
            </div>
            <div onClick={() => handleClick()}>
               

                <p className="">{employment}</p>

            </div>

        </ReactCardFlip>
        </div>
     );
}
 
export default FlipCard;