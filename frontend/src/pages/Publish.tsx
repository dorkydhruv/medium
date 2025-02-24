import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <AppBar/>
        <div className="flex justify-center flex-col items-center">
            <div className="max-w-screen-lg w-full">
                <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4 " placeholder="Title" onChange={(e)=>setTitle(e.target.value)} required />
            </div >
            <div className="max-w-screen-xl w-full p-2.5 mt-3">

            <TextEditor onChange={(e)=>setContent(e.target.value)}/>
            <button onClick={async ()=>{
                console.log(title,content)
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })
                
                    navigate("/blog/"+response.data.id);
                
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
                Publish post
            </button>
            </div>
        </div>
    </div>
}

function TextEditor({
    onChange
}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <form>
       <div className="w-full max-w-screen-xl mb-4 border border-gray-200 rounded-lg bg-gray-50">
           <div className="px-4 py-2 bg-white rounded-b-lg">
               <label  className="sr-only">Publish post</label>
               <textarea  rows={9} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Content..." onChange={onChange} required ></textarea>
           </div>
       </div>
       
    </form>
    
}