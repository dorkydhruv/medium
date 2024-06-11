interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate 
}: BlogCardProps )=>{
    return (
        <div className="border-b-2 border-slate-200 pb-4 p-5">
            <div className="flex ">
                <div className="flex justify-center flex-col"><Avatar authorName={authorName}></Avatar></div>
                <div className="flex justify-center">
                <div className="pl-2 mr-2 font-medium ">{authorName}</div> <span>&#183;</span> <div className="pl-2 flex justify-center flex-col font-light text-sm text-slate-900">{publishedDate}</div>
                </div>
            </div>
            <div className="text-lg font-semibold pt-2">
                {title}
            </div>
            <div className="text-sm font-normal text-black">
                {content.substring(0,100)+ "...."}
            </div>
            <div className="text-slate-500 text-md font-extralight pt-2">
                {`${Math.ceil(content.length/100)} minutes`}
            </div>
        </div>
    )
}

function Avatar({
    authorName
} : {authorName: string}){
    return (
        
<div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-xs text-gray-600 dark:text-gray-300">{authorName[0]}</span>
</div>

    )
}