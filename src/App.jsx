import './App.css';
import  { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home'
import Event from './pages/Event';
import Login from './pages/Login'
import AddEvent from './pages/AddEvent';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/event/:slug' element={<Event/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addEvent' element={<AddEvent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
