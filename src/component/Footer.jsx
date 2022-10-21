import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGooglePlusSquare,faFacebook,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer=()=>{
    return(
        <div className='h-fit w-full relative bg-black text-white text-center p-4'>
            <h1 className='mb-2 text-xl font-Abril_Fatface uppercase'>Contact Us</h1>
            <div>
                <Link to='#' className='m-6'><FontAwesomeIcon icon={faInstagram} color='white' size='2xl'/></Link>
                <Link to='#' className='m-6'><FontAwesomeIcon icon={faGooglePlusSquare} color='white' size='2xl'/></Link>
                <Link to='#' className='m-6'><FontAwesomeIcon icon={faFacebook} color='white' size='2xl'/></Link>
                <Link to='#' className='m-6'><FontAwesomeIcon icon={faLinkedin} color='white' size='2xl'/></Link>
                <Link to='#' className='m-6'><FontAwesomeIcon icon={faGithub} color='white' size='2xl'/></Link>
            </div>
        </div>
    )
}

export default Footer