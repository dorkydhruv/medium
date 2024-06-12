import { Blog } from "../hooks"

export const FullBlogCard = ({blog}:{blog:Blog})=>{
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-20 max-w-screen-2xl w-full">
        <div className="col-span-8">
            <div className="text-3xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-md text-slate-500 pt-2">
                Posted on 2nd December 2021
            </div>
            <div className="pt-2 text-gray-900">
            {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            <div className="flex justify-center">
                <Avatar authorName={blog.author.name || "Anonymous"} />
                <div>
                    <div className="text-2xl font-bold ">
                        {blog.author.name || "Anonymous"} 
                    </div>
                    <div className="text-md font-light text-slate-700">
                        Random catchphrase here ... :)
                    </div>  
                </div>
            </div>
        </div>
         </div>
    </div>
}

function Avatar({
    authorName
} : {authorName: string}){
    return (
        
<div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-xs text-gray-600 dark:text-gray-300">{authorName[0]}</span>
</div>

    )
}