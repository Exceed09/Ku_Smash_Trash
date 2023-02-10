import "../styles/Nav.css"
import { FcFullTrash } from "react-icons/fc"

function Nav() {
  return (
    <div className="navbar">
      <a href="/" className="navbar-a">
        <img src="/icon.png" alt="trash" className="trash" width={50}/>
        <h1 style={{marginLeft:"2rem",marginRight:"2rem"}}>KU Smash Trash</h1>
        <img src="/icon.png" alt="trash" className="trash" width={50}/>
      </a>
    </div>
  )
}

export default Nav
