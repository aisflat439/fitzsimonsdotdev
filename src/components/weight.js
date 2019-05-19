import React, { useState } from "react"

const Weight = ({ incrementTotal, weight, color = "silver", metric }) => {

    return (
        <div
            onClick={() => { incrementTotal(weight) }}
            className={`weight ${color}`}>
                {/* {count > 0 && <span>{count}</span>} */}
                {weight}
                {metric ? "kg" : "lbs"}
        </div>
    )
}

export default Weight