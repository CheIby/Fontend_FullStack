// import Footer from '../component/Footer';
// import EventsCard from '../component/EventsCard';
import { useState } from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom';

function AddEvent(){
    //title img content date
    const [title,setTitle]=useState('')
    const [img,setImg]=useState('')
    const [content,setContent]=useState('')
    const [date,setDate]=useState('')

    const submitForm=async()=>{
        await axios.post('http://localhost:7000/event/create',{title,img,content,date})
        .then(res =>{
            setTitle('')
            setImg('')
            setContent('')
            setDate('')
        }).catch(err=>{
            alert(err)
        })
    }

     return(
        <div>
            <div className='my-5'>
                    <h1 className='uppercase mb-4'>Name</h1>
                    <input type="text" placeholder='Your Name' className='input_register' id='name' value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className='my-5'>
                    <h1 className='uppercase mb-4'>Lastname</h1>
                    <input type="text" placeholder='Your Lastname' className='input_register' id='lastname' value={img} onChange={e=>setImg(e.target.value)}/>
                </div>
                <div className='my-5'>
                    <h1 className='uppercase mb-4'>Email</h1>
                    <input type="email" placeholder='Your Email' className='input_register' id='email' value={content} onChange={e=>setContent(e.target.value)}/>
                </div>
                <div className='my-5'>
                    <h1 className='uppercase mb-4'>Tel</h1>
                    <input type="text" placeholder='Your Tel' className='input_register' id='tel' value={date} onChange={e=>setDate(e.target.value)}/>
                </div>
                <div className='flex justify-center'>
                    <div className="p-2 border-solid border-2 border-green-600 rounded-xl w-56 cursor-pointer text-center text-green-600 duration-300 hover:bg-green-600 hover:text-white" onClick={e=>submitForm()}>Submit</div>
                </div>
        </div>
     )
}

export default AddEvent