

export const AppBar = ()=>{
    return <div className="border-b flex justify-between py-4 px-10">
        <div className="flex flex-col justify-center">
            Medium
        </div>
        <div>
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