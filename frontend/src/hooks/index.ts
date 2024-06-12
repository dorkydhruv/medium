import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const useBlogs= ()=>{
    const [loading, setLoading] = useState<boolean>(true)
    const [blogs, setBlogs] = useState<Blog[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>{
            console.log(response.data)
            setBlogs(response.data)
            setLoading(false)
        })
    },[])
    return{
        loading,
        blogs
    }
}

export const useBlog = (id:string)=>{
    const [loading, setLoading] = useState<boolean>(true)
    const [blog, setBlog] = useState<Blog>()
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>{
            console.log(response.data)
            setBlog(response.data)
            setLoading(false)
        })
    },[]);
    return {
        loading,
        blog
    }
}

export interface Blog{
    id:string,
    title:string,
    content:string,
    author:{
    id:string,
    name?:string,
    email?:string,
    }
}

