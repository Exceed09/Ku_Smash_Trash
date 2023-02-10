import axios from "axios"

// export async function getAllBin() {
//     const response = await axios.get(`http://group9.exceed19.online/all_bins/`)
//     return response.data
// }

export async function getAllBinStatus() {
    const response = await axios.get(`http://ecourse.cpe.ku.ac.th/exceed09/all_bins/status`)
    return response.data.message
}

export async function getAllBinInZone(zone) {
    const response = await axios.get(`http://ecourse.cpe.ku.ac.th/exceed09/zone/${zone}/`)
    return response.data.message
}

export async function getResetAverageInZone() {
    const response = await axios.get(`http://ecourse.cpe.ku.ac.th/exceed09/zone/reset_data`)
    return response.data.message[0]
}

export async function getBinById(id) {
    const response = await axios.get(`http://ecourse.cpe.ku.ac.th/exceed09/all_bins/${id}/status`)
    return response.data
}

// export async function setStatusBinId(id, status) {
//     const response = await axios.put(` http://localhost:3004/status/${id}`, {
//         status,
//     })
//     return response.data
// }

// export async function setResetAverageBinInZone(zone, reset) {
//     const response = await axios.put(` http://localhost:3004/reset/${zone}`, {
//         reset,
//         zone,
//     })
//     return response.data
// }