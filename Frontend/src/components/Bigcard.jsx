// import { BsCoin } from "react-icons/bs"
// import { GiChiliPepper } from "react-icons/gi"
// import { FaSeedling } from "react-icons/fa"
// import {AiFillBulb} from "react-icons/ai"

const BCard = ({ id, location, status, zone, in_charge, contact, image = "/bin.png", changeclick }) => {
  return (
    <div
      className="bcard"
      onClick={() => {
        changeclick()
      }}
    >
      <div className="bcard-header">
        <img src={image} alt="bin" className="card-img" />
      </div>
      <div className="bcard-body">
        <br></br>
        <div className="status"> {`Status : ${status}`}</div>
        <div className="ocation">
          <p>Location</p>
          {location}
        </div>
        <div className="zone">
          <p>Zone</p>
          {zone}
        </div>
        <div className="in_charge">
          <p> </p>
          {`In_charge : ${in_charge}`}
        </div>
        <div className="contact">
          <p> </p>
          {`Contact : ${contact}`}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default BCard
