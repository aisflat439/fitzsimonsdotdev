import React from "react"

const Weight = ({ incrementTotal, weight, color = "silver", metric }) => {
    return (
        <div 
            onClick={() => incrementTotal(weight, 2)}
            className={`weight ${color}`}>
                {metric ? weight : (weight * 2.2).toFixed()}
                {metric ? "kg" : "lbs"}
        </div>
    )
}

export default Weight