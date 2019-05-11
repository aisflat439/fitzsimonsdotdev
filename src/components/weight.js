import React from "react"

const Weight = ({ incrementTotal, weight, color = "silver" }) => (
    <div 
        onClick={() => incrementTotal(weight)}
        className={`weight ${color}`}>
            {weight}kg
    </div>
)

export default Weight