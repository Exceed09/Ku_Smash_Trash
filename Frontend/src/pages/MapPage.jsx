import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Nav from "../components/Nav"

function MapPage() {
    return (
        <div>
            <Nav />
            <div className="home-center">
                <Link to="/home/A_building">
                    <button>A building</button>
                </Link>
                <Link to="/home/B_building">
                    <button>B building</button>
                </Link>
                <Link to="/home/C_building">
                    <button>C building</button>
                </Link>
            </div>
        </div>
    )
}

/*
<div className="home-button">
    <button onClick={_ => {
        setZone("A building")
    }}>A building</button>

    <button onClick={_ => {
        setZone("B building")
    }}>B building</button>

    <button onClick={_ => {
        setZone("C building")
    }}>C building</button>
</div>

<div className="home-button">
    <button onClick={_ => setZone("")}>Reset</button>
    <button onClick={_ => setZone("A building")}>A building</button>
    <button onClick={_ => setZone("B building")}>B building</button>
    <button onClick={_ => setZone("C building")}>C building</button>
</div>
*/



export default MapPage