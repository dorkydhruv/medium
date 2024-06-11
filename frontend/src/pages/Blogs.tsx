import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/Blog-Card"
import { useBlogs } from "../hooks"

export const Blogs =()=>{
    const blogs = useBlogs();

    if(blogs.loading){
        return <div>Loading...</div>
    }

    return (
        <><AppBar /><div className="flex justify-center">
            <div className="max-w-xl">
                //@ts-ignore
                {blogs.map(blog=><BlogCard authorName={"Dhuv"} content={"I ahve been making videos since childhood and today I have given you a remedy to make b=videos worth watchinh"} publishedDate={"2nd Feb 2024"} title={"How I amke 20 dollars a moth making yt vidoes"} />)}
            </div>
        </div></>
    )
}