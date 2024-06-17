import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/Blog-Card"
import { BlogSkeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs =()=>{
    const {loading,blogs} = useBlogs();

    if(loading){
        return (
            <BlogSkeleton/>
        )
    }

    return (
        <><AppBar /><div className="flex justify-center">
            <div className="max-w-screen-md w-screen ">
                {blogs.map(blog=><BlogCard authorName={blog.author.name || "Anonymous"} content={blog.content} publishedDate={"2020"} title={blog.title} key={blog.id} id={blog.id} />)}
            </div>
        </div></>
    )
}