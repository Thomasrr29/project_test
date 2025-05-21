import { Link } from "react-router-dom";

const HeaderComponent = () => {


    return (
        <header className="w-full bg-gray-500 flex 
        justify-between h-[100px] items-center ">
            <Link to={"/"}>
                <p className="font-bold ml-10">Animals database</p>
            </Link>
            
            <Link
            className="bg-blue-500 py-2 px-4 rounded-lg 
            cursor-pointer text-white font-bold hover:bg-blue-600 mr-12"
            to="/create">Crear animal</Link>
        </header>
    )
}

export default HeaderComponent; 