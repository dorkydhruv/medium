import { Link } from "react-router-dom"


export const AppBar = ()=>{
    return <div className="border-b flex justify-between py-4 px-10">
        <Link to={"/"}>
            <div className="flex flex-col justify-center cursor-pointer">
                Medium
            </div>
        </Link>
        
        <div>
            <Link to={'/publish'}>
                <button type="button" className=" mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Add</button>
            </Link>
            <Avatar authorName={"Dhruv"}/>
        </div>
    </div>
}


function Avatar({
    authorName
} : {authorName: string}){
    return (
        
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-sm text-gray-600 dark:text-gray-300">{authorName[0]}</span>
    </div>

    )
}