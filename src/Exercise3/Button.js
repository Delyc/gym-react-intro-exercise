const Button = ({text, handleClick}) => {
    return ( 
        <button className="bg-blue-600 py-2 px-5 rounded text-white" onClick={handleClick}>{text}</button>
     );
}
 
export default Button;