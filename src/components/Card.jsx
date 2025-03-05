const Card = ({children, handleClick}) => {
    return ( 
        <div 
            onClick={handleClick}
            className="bg-gray-700 rounded-md lg:mb-0 lg:text-xl lg:tracking-wider lg:p-5 mb-3 text-center p-2 font-medium cursor-pointer hover:bg-gray-500 hover:text-gray-800"
        >
            {children}
        </div>
     );
}
 
export default Card;