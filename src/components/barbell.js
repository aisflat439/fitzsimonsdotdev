import React from "react"

const Barbell = ({ incrementTotal, weight, name }) => (
  <div onClick={() => incrementTotal(weight)} className={`barbell`}>
    {name}
  </div>
)

export default Barbell
