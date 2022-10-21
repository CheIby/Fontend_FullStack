import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import '../css/Navbar.css'
import { useStoreSelector } from '../store/store';

const Navbar =()=>{
    const {user} = useStoreSelector((state)=>state.auth)
    return(
        <nav className='bg-white w-full h-14 flex justify-between m-0'>
            <Link to='/' className='logo'><FontAwesomeIcon icon={faCube} color="black" className='mx-4' size="xl"/> Booking</Link>
            <ul className='flex justify-center items-center'>
                <li>
                    <Link to='/' className='navbar_BTN'>Home</Link>
                </li>
                {user&&<li>
                    <Link to='/addEvent' className='navbar_BTN'>Events</Link>
                </li>}
                <li>
                    <Link to='/login' className='navbar_BTN'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;