import '../css/Home.css'
import Footer from '../component/Footer';
import EventsCard from '../component/EventsCard';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home(){
    const [events,setEvents]=useState([])

    const fetchData=async()=>{
        await axios.get('http://localhost:7000/event/getEvents')
        .then(res=>{
            setEvents(res.data)
        }).catch(err=>{
            alert(err)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            <div className="bg">
                <div className="content">
                    <h1>Upcoming Events</h1>
                </div>
            </div>
            <div className='contrainer'>
                    {events.map((event,index)=>(
                        <Link to={`/event/${event.slug}`} key={index}><EventsCard title={event.title} content={event.content} date={event.date} imgSrc={event.img}/></Link>
                    ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Home;