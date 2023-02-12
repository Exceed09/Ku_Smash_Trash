import React from 'react'

const  Status = ({num}) => {
    let code = ""
    if(Number(num) < 50){
        code = "#1FA21A"
    }
    else if(Number(num) >= 50 && num < 90){
        code = "#D1A235"
    }
    else if(Number(num)>= 90){
        code = "#D13535"
    }   
    return (
        <div style={{color:code, "fontWeight":"bold"   }}>
            {`Status : ${num} %`}
        </div>
    )
}

export default Status