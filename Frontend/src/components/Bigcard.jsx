// import { BsCoin } from "react-icons/bs"
// import { GiChiliPepper } from "react-icons/gi"
// import { FaSeedling } from "react-icons/fa"
// import {AiFillBulb} from "react-icons/ai"
import Status from "./Status"
import { useState, useEffect } from "react"
import "../styles/Bigcard.css"
import { getBinById } from "../services/Request.js"

const BCard = ({ bin_id, location, status, zone, in_charge, contact, image = "/bin.png", changeclick }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getBinById(bin_id)
      .then((res) => {
        setData(res)
      })

    const interval = setInterval(() => {
      getBinById(bin_id)
        .then((res) => {
          setData(res)
        })
    }, 5000);
    return () => clearInterval(interval);
  }, [])



  return (
    <div
      className="bcard"
      onClick={() => {
        changeclick()
      }}
    >
      <div>
        <img src={data.image} alt="building" className="card-img" />
      </div>
      <div className="bcard-body">
        <br></br>
        <Status num={data.status}></Status>
        <div className="location">
          <div className="loca-head">Location</div>
          <br></br>
          {location}
        </div>
        <div className="zone">
          {`Zone ${data.zone}`}
        </div>
        <div className="in_charge">
          <p> </p>
          {`In_charge : ${data.in_charge}`}
        </div>
        <div className="contact">
          <p> </p>
          {`Contact : ${data.contact}`}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default BCard
