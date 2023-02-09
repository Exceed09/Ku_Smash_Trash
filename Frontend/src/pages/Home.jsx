import { useEffect, useState } from "react"
import { getAllBin, getAllBinInZone, getAllStatus } from "../services/request"
import Card from "../components/Menucard"
import BCard from "../components/Bigcard"
import Nav from "../components/Nav"

function Home() {
  const [statusList, setStatusList] = useState([])
  const [binList, setBinList] = useState([])
  const [bigCard, setBigCard] = useState(null)
  const zone = window.location.pathname.split("/")[2]

  let responce

  useEffect(() => {
    getAllBinInZone(zone).then((res) => {
      setBinList(res)
    })
    const interval = setInterval(() => {
      getAllStatus().then((res) => {
        // console.log(res)
        responce = res
        binList.forEach((item) => {
          responce.forEach((status) => {
            if (item.id === status.id) {
              item.status = status.status
            }
          })
        })
      }).catch((err) => {
        // console.log(err)
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return !bigCard ? (
    <div>
      <Nav />
      <div className="home">
        <div className="home-center">
          <div className="home-menulist">
            {binList.map((item) => {
              return (
                <Card {...item} changeclick={e => {
                  setBigCard(item)
                }} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  ) :
    (
      <div>
        <Nav />
        <div className="home">
          <div className="home-center">
            <BCard {...bigCard} changeclick={e => {
              setBigCard(null)
            }} />
          </div>
        </div>
      </div>
    )
}



export default Home
