import "../css/SingleEvent.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleEvent = () => {
  const [event, setEvent] = useState([]);
  const [name, setName] = useState("");
  const [registers, setRegisters] = useState(0);
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const fetchEvent = await axios.get(
        `http://localhost:7000/event/getOneEvent/${params.slug}`
      );
      setEvent(fetchEvent.data);
      // const fetchUserRegister = await axios.get(
      //   `http://localhost:7000/register/getSameEvents/${event.title}`
      // );
      //   console.log(fetchUserRegister.data)
      //  setRegisters(fetchUserRegister.data)
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    const fetch = async () => {
      const fetchUserRegister = await axios.get(
        `http://localhost:7000/register/getSameEvents/${event.title}`
      );
        console.log(fetchUserRegister.data)
        if (fetchUserRegister.data.count === event.studentNum){
          setRegisters("full")
        }else{
          setRegisters(fetchUserRegister.data.count)
        }
    };
    fetch();
  },[event])

  const submitForm = async () => {
    const title = event.title;
    await axios
      .post("http://localhost:7000/register/add", {
        title,
        name,
        lastname,
        email,
        tel,
      })
      .then((res) => {
        setName("");
        setLastname("");
        setEmail("");
        setTel("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="grid grid-cols-3 mx-28 my-16">
      <div className="bg-white">
        <img src={event.img} alt="" className="rounded-3xl" />
        <h1 className="font-Barlow text-2xl my-4">INSTRUCTOR {event.teacher}</h1>
        <p className="font-Raleway mb-4">{event.content}</p>
        <span className="flex justify-between">
          <h2 className="font-Barlow">Date : {event.date}</h2>
          <h2 className="font-Barlow">Register : {registers === 'full'? registers : `${registers}/${event.studentNum}`}</h2>
        </span>
      </div>
      <div className="font-Barlow m-3">
        <h1 className="text-2xl uppercase">{event.title}</h1>
        <p>{event.content}</p>
      </div>
      <div className="py-6 px-24 mt-5">
        <h1 className="mb-5 text-3xl text-center">Register</h1>
        <div className="my-5">
          <h1 className="uppercase mb-4">Name</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="input_register"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <h1 className="uppercase mb-4">Lastname</h1>
          <input
            type="text"
            placeholder="Your Lastname"
            className="input_register"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="my-5">
          <h1 className="uppercase mb-4">Email</h1>
          <input
            type="email"
            placeholder="Your Email"
            className="input_register"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <h1 className="uppercase mb-4">Tel</h1>
          <input
            type="text"
            placeholder="Your Tel"
            className="input_register"
            id="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <div
            className="p-2 border-solid border-2 border-green-600 rounded-xl w-56 cursor-pointer text-center text-green-600 duration-300 hover:bg-green-600 hover:text-white"
            onClick={(e) => submitForm()}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
