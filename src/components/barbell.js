import React from "react"

const Barbell = ({ updateBarbell, weight, name,}) => (
  <div
    onClick={() => updateBarbell(name, weight)}
    className={`click-target barbell`}
  >
    {name}
  </div>
)

export default Barbell
