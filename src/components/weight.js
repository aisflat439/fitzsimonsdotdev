import React, { useState, useEffect } from "react"

// const Weight = ({ incrementTotal, weight, color = "silver" }, props) => {
const Weight = props => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      setCount(0)
    }, [props.reset])

    return (
      <div
        onClick={() => {
          props.incrementTotal(props.weight)
          setCount(count + 1)
        }}
        className={`weight ${props.color}`}
      >
        {count > 0 && <span>{count}</span>}
        {props.weight}
        {props.metric ? "kg" : "lbs"}
      </div>
    )
}

export default Weight