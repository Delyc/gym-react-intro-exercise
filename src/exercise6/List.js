const List = ({icon, value}) => {
    return ( 
        <>
        <p className="border border-gray-500 py-2 px-5 flex gap-2">{icon}{value}</p>
        </>
     );
}
 
export default List;