import React from "react"

const WeightOutput = ({ total, units }) => (
  <>
    <h3>{units ? `Kilograms: ${total}` : `Pounds: ${total}`}</h3>
    <h3>{units ? `Pounds: ${(total * 2.20462).toFixed(2)}` : `Kilograms: ${(total / 2.20462).toFixed(2)}`}</h3>
  </>
)

export default WeightOutput
