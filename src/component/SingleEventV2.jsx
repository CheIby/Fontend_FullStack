import "../css/SingleEventV2.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faCalendarDay,faLocationCrosshairs,faUser } from '@fortawesome/free-solid-svg-icons'
import CountdownTimer from "./CountdownClock/CountdownTimer";

const SingleEventV2 = () => {
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

  const dealDate = new Date(event.lastDate).getTime()
  const NOW_IN_MS = new Date().getTime();
  console.log(dealDate-NOW_IN_MS)

  const dateTimeAfterThreeDays = NOW_IN_MS + (dealDate-NOW_IN_MS);

return(
    <div>
        <div className="contrainerEV">
            <div className="left-contrainer">
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                <div className="left-content">
                  <h1>{event.title}</h1>
                  <p>{event.content}</p>
                </div>
            </div>
            <div className="right-contrianer">
                <div className="side-bar">
                    <div className="">
                      <img className="" src={event.img} alt=""/>
                      <h1 className="side-bar-content"><FontAwesomeIcon icon={faMoneyBill} size='xl'/> {parseFloat(event.price).toFixed(2)} THB</h1>
                      <div className="register-btn">Register</div>
                      <h1><FontAwesomeIcon icon={faCalendarDay} size='xl'/> Date: {event.date}</h1>
                      <h1><FontAwesomeIcon icon={faLocationCrosshairs} size='xl'/> Location: {event.learnLocation}</h1>
                      <h1><FontAwesomeIcon icon={faUser} size='xl'/> Register: {registers === 'full'? registers : `${registers}/${event.studentNum}`}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SingleEventV2