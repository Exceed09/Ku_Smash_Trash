import { g } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import Reactiveg from "../components/ReactiveButton"
import "../styles/MapPage.css"
import Home from "./Home"

function MapPage() {
    const [zone, setZone] = useState(null)
    useEffect(() => {

    }, [zone])
    return (
        <div>
            <Nav />
            <div className="map-page">
                <br></br>
                <br></br>
                <svg viewBox="-252 -208 1540 1682" width="1080" height="1180" className="map-click">
                    <g className="layer">
                        <g className="map-zone" onClick={
                            (e) => setZone("A")
                        }>
                            <Reactiveg zone="A" d="m353.47,960.91c0,0 25.64,-10.83 26.16,39.69c0.52,50.52 0.52,63.51 0.43,63.12c-0.1,-0.39 2.71,27.81 -19.79,27.81c-22.5,0 -204.59,0 -204.69,-0.39c-0.1,-0.39 -22.4,6.88 -22.4,-35.7c0,-42.58 0.52,-65.68 0.43,-66.06c-0.1,-0.39 -1.99,-30.65 23.12,-30.65c25.12,0 196.74,2.17 196.74,2.17z" fill="#d3d3d3" id="svg_2" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_30" stroke="#000000" strokeWidth="0" textAnchor="middle" x="253.02" space="preserve" y="1041.25">A</text>
                        </g>
                        <g onClick={
                            (e) => setZone("B")
                        } className="map-zone">
                            <Reactiveg zone="B" d="m425.08,818.63c0,0 26.39,-4.01 26.93,14.69c0.54,18.7 0.54,23.5 0.44,23.36c-0.1,-0.14 2.79,10.29 -20.36,10.29c-23.16,0 -210.57,0 -210.67,-0.14c-0.1,-0.14 -23.06,2.55 -23.06,-13.21c0,-15.76 0.54,-24.31 0.44,-24.45c-0.1,-0.14 -2.05,-11.34 23.8,-11.34c25.85,0 202.49,0.8 202.49,0.8z" fill="#d3d3d3" id="svg_3" stroke="#000000" strokeWidth="3" transform="rotate(-125.053 325.433 842.401)" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_31" stroke="#000000" strokeWidth="0" textAnchor="middle" x="329.02" space="preserve" y="855.29">B</text>
                        </g>
                        <g onClick={
                            (e) => setZone("C")
                        } className="map-zone">
                            <Reactiveg zone="C" d="m295.29,627.66c0,0 7.75,-4.17 7.91,15.28c0.16,19.45 0.16,24.45 0.13,24.3c-0.03,-0.15 0.82,10.71 -5.98,10.71c-6.8,0 -61.86,0 -61.89,-0.15c-0.03,-0.15 -6.77,2.65 -6.77,-13.74c0,-16.4 0.16,-25.29 0.13,-25.44c-0.03,-0.15 -0.6,-11.8 6.99,-11.8c7.59,0 59.49,0.83 59.49,0.83z" fill="#d3d3d3" id="svg_4" stroke="#000000" strokeWidth="3" transform="rotate(-90.5526 266.01 652.388)" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_28" stroke="#000000" strokeWidth="0" textAnchor="middle" x="264.02" space="preserve" y="663.25">C</text>
                        </g>
                        <g onClick={
                            (e) => setZone("D1")
                        } className="map-zone">
                            <Reactiveg zone="D1" d="m237.76,332.64c0,0 -4.83,-25.92 17.92,-26.55c22.75,-0.64 28.6,-0.67 28.43,-0.57c-0.17,0.1 12.53,-2.81 12.49,19.96c-0.04,22.76 -0.36,206.99 -0.53,207.09c-0.17,0.1 3.06,22.65 -16.11,22.74c-19.17,0.09 -29.57,-0.39 -29.75,-0.29c-0.17,0.1 -13.8,2.08 -13.76,-23.33c0.04,-25.41 1.32,-199.05 1.32,-199.05z" fill="#d3d3d3" id="svg_10" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_20" stroke="#000000" strokeWidth="0" textAnchor="middle" x="267.97" space="preserve" y="440.97">D1</text>
                        </g>
                        <g onClick={
                            (e) => setZone("D2")
                        } className="map-zone">
                            <Reactiveg zone="D2" d="m289.85,293.16c0,0 28.34,2.37 28.34,-22.16c0,-24.54 0,-45.91 -0.88,-46.41c-0.88,-0.5 0.88,-24.04 30.98,-24.04c30.11,0 46.05,0.79 45.17,0.29c-0.88,-0.5 25.67,2.88 26.56,-23.24c0.89,-26.12 -0.89,-28.5 -0.89,-28.5c0,0 -0.89,-13.46 -23.02,-13.46c-22.14,0 -142.57,0.79 -143.45,0.29c-0.88,-0.5 -23.92,-2.66 -24.8,53.03c-0.88,55.7 -0.01,81.64 -0.89,81.53c-0.88,-0.11 1.76,24.65 23.9,24.65c22.14,0 38.96,-1.98 38.96,-1.98z" fill="#d3d3d3" id="svg_33" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_21" stroke="#000000" strokeWidth="0" textAnchor="middle" x="277.97" space="preserve" y="201.97">D2</text>
                        </g>
                        <g onClick={
                            (e) => setZone("E")
                        } className="map-zone">
                            <Reactiveg zone="E" d="m466.38,36.89c0,0 12.04,-4.79 12.28,17.57c0.25,22.37 0.25,28.12 0.2,27.95c-0.05,-0.17 1.27,12.31 -9.29,12.31c-10.56,0 -96.06,0 -96.11,-0.17c-0.05,-0.17 -10.52,3.05 -10.52,-15.81c0,-18.85 0.25,-29.08 0.2,-29.25c-0.05,-0.17 -0.94,-13.57 10.86,-13.57c11.79,0 92.38,0.96 92.38,0.96z" fill="#d3d3d3" id="svg_15" stroke="#000000" strokeWidth="3" transform="rotate(-89.6871 420.919 65.3272)" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_19" stroke="#000000" strokeWidth="0" textAnchor="middle" x="419.97" space="preserve" y="73.97">E</text>
                        </g>
                        <g onClick={
                            (e) => setZone("F")
                        } className="map-zone">
                            <Reactiveg zone="F" d="m532.39,135.87c0,0 12.04,-4.79 12.28,17.57c0.25,22.37 0.25,28.12 0.2,27.95c-0.05,-0.17 1.27,12.31 -9.29,12.31c-10.56,0 -96.06,0 -96.11,-0.17c-0.05,-0.17 -10.52,3.05 -10.52,-15.81c0,-18.85 0.25,-29.08 0.2,-29.25c-0.05,-0.17 -0.94,-13.57 10.86,-13.57c11.79,0 92.38,0.96 92.38,0.96z" fill="#d3d3d3" id="svg_14" stroke="#000000" strokeWidth="3" transform="rotate(-0.542813 486.927 164.308)" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_23" stroke="#000000" strokeWidth="0" textAnchor="middle" x="485.02" space="preserve" y="174.95">F</text>
                        </g>
                        <g onClick={
                            (e) => setZone("G")
                        } className="map-zone">
                            <Reactiveg zone="G" d="m588.44,141.16c0,0 -29.24,-3.68 -29.24,13.66c0,17.34 0,20.49 -0.2,20.16c-0.2,-0.33 3.33,13.99 30.48,13.99c27.15,0 182.77,1.05 182.57,0.72c-0.2,-0.33 54.5,-3.87 53.46,21.88c-1.04,25.75 -1.04,31 -1.24,30.67c-0.2,-0.33 2.28,12.94 31.53,12.42c29.24,-0.53 44.91,0 52.22,0c7.31,0 2.09,-103.51 2.09,-103.51c0,0 4.18,-10.51 -63.71,-10.51c-67.89,0 -257.96,0.53 -257.96,0.53z" fill="#d3d3d3" id="svg_34" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_35" stroke="#000000" strokeWidth="0" textAnchor="middle" x="864.26" space="preserve" y="196.25">G</text>
                        </g>
                        <g onClick={
                            (e) => setZone("H")
                        } className="map-zone">
                            <Reactiveg zone="H" d="m853.85,272.32c0,0 -4.99,-9.82 17.76,-10.28c22.74,-0.46 28.59,-0.53 28.42,-0.49c-0.17,0.04 12.51,-1.19 12.61,7.48c0.1,8.67 0.9,78.81 0.73,78.85c-0.17,0.04 3.2,8.59 -15.97,8.81c-19.17,0.22 -29.57,0.14 -29.75,0.18c-0.17,0.04 -13.79,0.93 -13.9,-8.75c-0.11,-9.67 0.11,-75.8 0.11,-75.8z" fill="#d3d3d3" id="svg_8" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_22" stroke="#000000" strokeWidth="0" textAnchor="middle" x="881.02" space="preserve" y="322.92">H</text>
                        </g>
                        <g onClick={
                            (e) => setZone("J")
                        } className="map-zone">
                            <Reactiveg zone="J" d="m853.41,388.43c0,0 -5.1,-19.56 17.64,-20.23c22.74,-0.66 28.59,-0.73 28.42,-0.65c-0.17,0.08 12.5,-2.22 12.7,15c0.2,17.22 1.79,156.56 1.62,156.64c-0.17,0.08 3.3,17.11 -15.88,17.33c-19.17,0.22 -29.58,-0.06 -29.75,0.02c-0.17,0.08 -13.78,1.68 -14,-17.54c-0.22,-19.22 -0.75,-150.57 -0.75,-150.57z" fill="#d3d3d3" id="svg_7" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_24" stroke="#000000" strokeWidth="0" textAnchor="middle" x="882.02" space="preserve" y="473.92">J</text>
                        </g>
                        <g onClick={
                            (e) => setZone("K1")
                        } className="map-zone">
                            <Reactiveg zone="K1" d="m550.26,555.29c0,0 29.07,-4.87 29.66,17.87c0.59,22.75 0.59,28.6 0.48,28.42c-0.11,-0.17 3.08,12.52 -22.43,12.52c-25.51,0 -231.93,0 -232.04,-0.17c-0.11,-0.17 -25.39,3.1 -25.39,-16.07c0,-19.17 0.59,-29.57 0.48,-29.75c-0.11,-0.17 -2.26,-13.8 26.21,-13.8c28.47,0 223.03,0.97 223.03,0.97z" fill="#d3d3d3" id="svg_5" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_26" stroke="#000000" strokeWidth="0" textAnchor="middle" x="444.02" space="preserve" y="593.29">K1</text>
                        </g>
                        <g onClick={
                            (e) => setZone("K2")
                        } className="map-zone">
                            <Reactiveg zone="K2" d="m827.96,554.79c0,0 22.63,-4.87 23.09,17.87c0.46,22.75 0.46,28.6 0.38,28.42c-0.09,-0.17 2.4,12.52 -17.46,12.52c-19.86,0 -180.56,0 -180.65,-0.17c-0.09,-0.17 -19.77,3.1 -19.77,-16.07c0,-19.17 0.46,-29.57 0.38,-29.75c-0.09,-0.17 -1.76,-13.8 20.41,-13.8c22.17,0 173.63,0.97 173.63,0.97z" fill="#d3d3d3" id="svg_6" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_25" stroke="#000000" strokeWidth="0" textAnchor="middle" x="743.02" space="preserve" y="593.25">K2</text>
                        </g>
                        <g onClick={
                            (e) => setZone("L")
                        } className="map-zone">
                            <Reactiveg zone="L" d="m854,628.01c0,0 -5.1,-13.87 17.64,-14.34c22.74,-0.47 28.59,-0.52 28.42,-0.46c-0.17,0.05 12.5,-1.57 12.7,10.64c0.2,12.21 1.79,111.03 1.62,111.09c-0.17,0.05 3.3,12.13 -15.88,12.29c-19.17,0.16 -29.58,-0.04 -29.75,0.01c-0.17,0.05 -13.78,1.19 -14,-12.44c-0.22,-13.63 -0.75,-106.78 -0.75,-106.78z" fill="#d3d3d3" id="svg_9" stroke="#000000" strokeWidth="3" transform="rotate(0.642156 884.01 680.214)" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_27" stroke="#000000" strokeWidth="0" textAnchor="middle" x="885.02" space="preserve" y="689.25">L</text>
                        </g>
                        <g onClick={
                            (e) => setZone("M")
                        } className="map-zone">
                            <Reactiveg zone="M" d="m525.15,354.79c0,0 25.33,-4.87 25.84,17.87c0.52,22.75 0.52,28.6 0.42,28.42c-0.1,-0.17 2.68,12.52 -19.54,12.52c-22.23,0 -202.1,0 -202.2,-0.17c-0.1,-0.17 -22.13,3.1 -22.13,-16.07c0,-19.17 0.52,-29.57 0.42,-29.75c-0.1,-0.17 -1.97,-13.8 22.84,-13.8c24.81,0 194.35,0.97 194.35,0.97z" fill="#d3d3d3" id="svg_11" stroke="#000000" strokeWidth="3" />
                            <text fill="#000000" fontFamily="Cursive" fontSize="24" fontWeight="bold" id="svg_18" stroke="#000000" strokeWidth="0" textAnchor="middle" x="429.98" space="preserve" y="393.98">M</text>
                        </g>
                    </g >
                </svg >
            </div >
            {zone && <Home zone={zone} />}
        </div >
    )
}

export default MapPage