import { useEffect, useState } from "react"
import { getAllBinInZone, getAllBinStatus } from "../services/request.js"
import Card from "../components/Menucard"
import BCard from "../components/Bigcard"
import Nav from "../components/Nav"
import "../styles/Home.css"

function Home() {
  const [statusList, setStatusList] = useState([])
  const [binList, setBinList] = useState([])
  const [bigCard, setBigCard] = useState(null)
  const zone = window.location.pathname.split("/")[2]

  const UpdateStatus = (BinList, StatusList) => {
    BinList.forEach((item) => {
      StatusList.forEach((status) => {
        if (item.bin_id === status.bin_id) {
          if (item.status != status.status) {
            item.status = status.status
            setBinList(BinList)
          }
        }
      })
    })
  }

  useEffect(() => {
    getAllBinInZone(zone).then((responce) => {
      setBinList(responce)
    })
    getAllBinStatus().then((responce) => {
      setStatusList(responce)
    }).catch((err) => {
      console.log(err)
    })
    const interval = setInterval(() => {
      getAllBinStatus().then((responce) => {
        setStatusList(responce)
      }).catch((err) => {
        console.log(err)
      })
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  UpdateStatus(binList, statusList)

  return !bigCard ? (
    <div>
      <Nav />
      <div className="home">
        <div className="home-center">
          <div className="home-menulist">
            {binList.map((item) => {
              return (
                <Card key={item.bin_id} {...item} changeclick={e => {
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
