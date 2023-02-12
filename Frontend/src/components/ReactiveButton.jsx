import React, { useEffect, useState } from 'react'
import { getResetAverageInZone } from '../services/request.js';

// max 10 red   rgb(209, 53, 53)
// mid 6 yellow  rgb(209, 162, 53)
// min 0 green  rgb(31, 162, 53)

const ReactButton = ({ zone, d, fill, id, stroke, strokeWidth, transform }) => {
    const [resetAverage, setResetAverage] = useState(0)

    useEffect(() => {
        getResetAverageInZone().then((responce) => {
            setResetAverage(responce[zone])
        }).catch((err) => {
            console.log(err)
        })
        const interval = setInterval(() => {
            getResetAverageInZone().then((responce) => {
                setResetAverage(responce[zone])
            }).catch((err) => {
                console.log(err)
            }
            )
        }, 5000);
        return () => clearInterval(interval);

    }, [])

    let r = 0.0
    let g = 0.0
    let b = 53.0
    let resetCalc = 0.0;

    if (resetAverage > 10)
        resetCalc = 10
    else if (resetAverage < 0)
        resetCalc = 0
    else
        resetCalc = resetAverage

    if (resetCalc < 6) {
        r = 31 + ((209 - 31) / 6.0 * resetCalc)
        g = 162
    }
    else {
        r = 209
        g = 162 - ((162 - 53) / 4.0 * (resetCalc - 6))
    }

    return (
        <path d={d} fill={`rgb(${r},${g},${b})`} id={id} stroke={stroke} strokeWidth={strokeWidth} transform={transform}></path>
    )
}

export default ReactButton