import React from "react"
import Status from "./Status"
import "../styles/Menucard.css"

const Card = ({ id, location, status, zone, in_charge, contact, image = "/bin.png", changeclick }) => {
  return (
    <div
      className="card"
      onClick={() => {
        changeclick(id)
      }}
    >
      <div className="card-header">
        <img src={image} alt="building" className="card-img" />
      </div>
      <div className="card-body">
        <br></br>
        <Status num={status}></Status>
        <div className="location">
          <p style={{"fontWeight":"bold"}}>Location</p>
          {location}
        </div>
        <br></br>
      </div>
    </div>
  )
}
export default Card
