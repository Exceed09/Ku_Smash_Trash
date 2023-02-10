import React, { useEffect, useState } from 'react'
import { getResetAverageInZone } from '../services/Request';

// max 10 red
// mid 7 yellow
// min 5 green

const ReactButton = ({ zone, d, fill, id, stroke, strokeWidth, tranfrom }) => {
    const [resetAverage, setresetAverage] = React.useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            getResetAverageInZone(zone).then((responce) => {
                if (responce.reset != resetAverage) {
                    setresetAverage(responce.reset)
                }
            }).catch((err) => console.log(err))
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <path d={d} fill={fill} id={id} stroke={stroke} strokeWidth={strokeWidth} transform={tranfrom}></path>
    )
}

export default ReactButton