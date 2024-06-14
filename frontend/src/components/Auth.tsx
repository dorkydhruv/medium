import axios from "axios";
import { SignupInputType } from "dorkydhruv-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup"| "signin"})=>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInputType>({
        name: "",
        email: "",
        password: "" 
    });

    async function sendRequest(){
          try{
            const res =  await  axios.post(`${BACKEND_URL}/api/v1/user/${type}`,
                postInputs,
            );
            const jwt = res.data.jwt;
            localStorage.setItem("token",jwt);
            navigate('/blogs');
          }catch(e){
                console.log(e);
          }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center ">
                <div>
                    <div className="text-3xl font-extrabold text-left mt-4 px-10">
                        {type == "signup" ? "Create an account" : "Login to your account"}
                    </div>
                    {type=="signup" ? <div className="text-slate-400 px-10 py-5">
                        Already have an account ? 
                        <Link className="pl-2 underline" to={"/signin"}> Login</Link> 
                    </div>: <div className="text-slate-400 px-10 py-5">
                        Don't have an account ?
                        <Link className="pl-2 underline" to={"/signup"}> Signup</Link> 
                    </div> }
                    {type =="signup" ? <LabeledInput label="Name" placeholder="Dhruv Sharma" onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            name: e.target.value
                        }))
                    }}/> : null}
                    <LabeledInput label="Email" placeholder="dhruv@gmail.com" onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            email: e.target.value
                        }))
                    }}/>
                    <LabeledInput label="Password" type="password" placeholder="$$$.." onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>
                    <div className="flex justify-center pt-5">
                        <SubmitButton text={type=="signin" ? "Sign-In" : "Sign-Up"} onClick={sendRequest}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

interface LabeledInputProps {
    label : string;
    placeholder : string;
    onChange : (e: ChangeEvent<HTMLInputElement>)=>void;
    type?: string;
}


function LabeledInput({
    label , placeholder , onChange, type
}: LabeledInputProps ){
    return <div>
        <div className="mb-2">
    <label  className="block mb-2 text-sm font-bold  text-gray-900 pt-2">{label}</label>
    <input onChange={onChange} type={type!=null? type:"text"} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
</div>
    </div>
}

interface SubmitButtonProps {
    text: string;
    onClick: ()=>void;
}

function SubmitButton({text, onClick}: SubmitButtonProps){
    return (
        <button onClick={onClick} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">{text}</button>
    )
}

function AuthPage(){
    return (
        <Auth type={"signup"}/>
    )
}