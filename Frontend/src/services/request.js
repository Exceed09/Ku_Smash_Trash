import axios from "axios"

export async function getAllBin() {
    const response = await axios.get(" http://localhost:3004/data")
    return response.data
}

export async function getAllBinStatus() {
    const response = await axios.get(` http://localhost:3004/status`)
    return response.data
}

export async function getAllBinInZone(zone) {
    const response = await axios.get(" http://localhost:3004/data")
    return response.data.filter((bin) => bin.zone === zone)
}

export async function setStatusBinId(id, status) {
    const response = await axios.put(` http://localhost:3004/status/${id}`, {
        status,
    })
    return response.data
}

export async function setResetAverageBinInZone(zone, reset) {
    const response = await axios.put(` http://localhost:3004/reset/${zone}`, {
        reset,
        zone,
    })
    return response.data
}

export async function getResetAverageInZone(zone) { // return floating
    const response = await axios.get(" http://localhost:3004/reset")
    return response.data.filter((bin) => bin.zone === zone)
}