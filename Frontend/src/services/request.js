import axios from "axios"

export async function getAllBin() {
    const response = await axios.get(" http://localhost:3004/data")
    return response.data
}

export async function getAllStatus() {
    const response = await axios.get(` http://localhost:3004/status`)
    return response.data
}

export async function getAllBinInZone(zone) {
    const response = await axios.get(" http://localhost:3004/data")
    return response.data.filter((bin) => bin.zone === zone)
}