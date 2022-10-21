import { useState } from "react";
import {useSingin} from "../hooks/useSingin"

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {mutate:signin,isLoading,error}=useSingin()

    return(
        <div>
           <div className='my-5'>
                    <h1 className='uppercase mb-4'>Username</h1>
                    <input type="text" placeholder='Your Userneme' className='input_register' value={username} onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className='my-5'>
                    <h1 className='uppercase mb-4'>Password</h1>
                    <input type="text" placeholder='Your Password' className='input_register' value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='flex justify-center'>
                <div className="p-2 border-solid border-2 border-green-600 rounded-xl w-56 cursor-pointer text-center text-green-600 duration-300 hover:bg-green-600 hover:text-white" onClick={()=>signin({username,password})}>Submit</div>
                </div>
        </div>
    )
}

export default Login;