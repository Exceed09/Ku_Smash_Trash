import { useEffect, useState } from "react"
import Card from "../components/Menucard"
import BCard from "../components/Bigcard"
import { getAllBin, getAllStatus } from "../services/food"

function Home() {
  const [statusList, setStatusList] = useState([])
  const [binList, setBinList] = useState([])
  const [zone, setZone] = useState("")
  const [bigCard, setBigCard] = useState(null)

  let responce

  useEffect(() => {
    getAllBin().then((res) => {
      setBinList(res)
    })
    const interval = setInterval(() => {
      getAllStatus().then((res) => {
        // console.log(res)
        responce = res
      }).catch((err) => {
        // console.log(err)
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return !bigCard ? (
    <div className="home">
      <div className="home-center">
        <div className="home-inp">
          <div className="home-button">
            <button onClick={_ => setZone("")}>Reset</button>
            <button onClick={_ => setZone("A building")}>A building</button>
            <button onClick={_ => setZone("B building")}>B building</button>
            <button onClick={_ => setZone("C building")}>C building</button>
          </div>
        </div>
        <div className="home-menulist">
          {binList.filter((item) => (zone === "" ? true : item.zone === zone)
          ).map((item) => {
            return (
              <Card {...item} changeclick={e => {
                setBigCard(item)
              }} />
            )
          })}
        </div>
      </div>
    </div>
  ) :
    (
      <div className="home">
        <div className="home-center">
          <div className="home-inp">
            <div className="home-button">
              <button onClick={_ => {
                setZone("")
                setBigCard(null)
              }}>Reset</button>

              <button onClick={_ => {
                setZone("A building")
                setBigCard(null)
              }}>A building</button>

              <button onClick={_ => {
                setZone("B building")
                setBigCard(null)
              }}>B building</button>

              <button onClick={_ => {
                setZone("C building")
                setBigCard(null)
              }}>C building</button>
            </div>
          </div>
          <BCard {...bigCard} changeclick={e => {
            setBigCard(null)
          }} />
        </div>
      </div>
    )
}



export default Home
