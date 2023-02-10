import React, { useEffect, useState } from 'react'
import { getResetAverageInZone } from '../services/Request';

// max 10 red   rgb(209, 53, 53)
// mid 6 yellow  rgb(209, 162, 53)
// min 0 green  rgb(31, 162, 53)

const ReactButton = ({ zone, d, fill, id, stroke, strokeWidth, transform }) => {
    const [resetAverage, setResetAverage] = React.useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            getResetAverageInZone(zone).then((responce) => {
                if(responce.length > 0 && responce[0].reset != resetAverage)
                    setResetAverage(responce[0].reset)
            }).catch((err) => {
                console.log(err)
            } 
            )
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    let r = 0
    let g = 0
    let b = 53
    let resetCalc;
    if(resetAverage > 10)
    {
        resetCalc = 10
    }
    else if(resetAverage < 0)
    {
        resetCalc = 0
    }
    else{
        resetCalc = resetAverage
    }
        
    if(resetCalc < 6){
        r = 31+((209-31)*resetCalc/6)
        g = 162
    }
    else{
        r = 209
        g = 162-((162-53)*(resetCalc-6)/4)
    }
                            
    return (
        <path d={d} fill={`rgb(${r},${g},${b})`} id={id} stroke={stroke} strokeWidth={strokeWidth} transform={transform}></path>
        )
}

export default ReactButton