import parse from 'html-react-parser';
import '../css/EventsCard.css'

const EventsCard=(props)=>{
    return(
        <div className='card'>
            <div className='card_img'>
                <img src={props.imgSrc} alt="" className='object-cover'/>
            </div>
            <div className='card_content'>
                <h1 className='mb-3 uppercase'>{props.title}</h1>
                <p className='mb-3'>{parse(props.content.substring(0,150))}</p>
                <h3>date : {props.date}</h3>
            </div>
        </div>
    )
}

export default EventsCard