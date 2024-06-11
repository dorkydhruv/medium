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
        <div>
            <div className="flex ">
                <div className="flex justify-center flex-col"><Avatar authorName={authorName}></Avatar></div>
                <div className="flex justify-center">
                <div className="pl-2 mr-2 font-medium ">{authorName}</div> &#9679; <div className="pl-2 font-thin text-sm text-slate-900">{publishedDate}</div>
                </div>
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.substring(0,100)+ "...."}
            </div>
            <div>
                {`${Math.ceil(content.length/100)} minutes`}
            </div>
            <div className="bg-slate-300 h-1 w-full"> </div>
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