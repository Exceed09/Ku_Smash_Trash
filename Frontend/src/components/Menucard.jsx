import React from "react"

const Card = ({ id, location, status, zone, in_charge, contact, image = "/bin.png", changeclick }) => {
  return (
    <div
      className="card"
      onClick={() => {
        changeclick(id)
      }}
    >
      <div className="card-header">
        <img src={image} alt="bin" className="card-img" />
      </div>
      <div className="card-body">
        <br></br>
        <div className="status"> {`Status : ${status}`}</div>
        <div className="location">
          <p>Location</p>
          {location}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default Card
