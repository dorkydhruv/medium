import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlogCard } from "../components/FullBlogCard";
import { AppBar } from "../components/AppBar";

export default function Blog() {
    const {id} = useParams();
    const {loading,blog} = useBlog(id || "");
    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div>
            <AppBar/>
         <FullBlogCard blog={blog}/>
        </div>
    )
}