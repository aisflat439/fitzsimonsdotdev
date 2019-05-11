import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Weight from "../components/weight"
import Barbell from "../components/barbell"
import SEO from "../components/seo"
import { weights, barbells } from "../data/data"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
    this.updateTotal = this.updateTotal.bind(this)
  }

  updateTotal = (value) => {
    this.setState(
      { total: this.state.total + (value * 2) }
    )
  }

  resetTotal = () => {
    this.setState(
      { total: 0 }
    )
  }

  render() {
      
    return (
      <Layout>
        <SEO title="Barbell Calculator" />
        <h1>Calculate your barbells in Metric!</h1>
          {barbells.map((b, index) => (
            <Barbell
              key={b.index}
              incrementTotal={this.updateTotal}
              name={b.name}
              weight={b.weight}
            />
          ))}
        <div className="weights-container">
          {weights.map(w => (
            <Weight
              key={w.kg}
              incrementTotal={this.updateTotal}
              weight={w.kg}
              color={w.color}
            />
          ))}
        </div>
        <div onClick={this.resetTotal}>reset</div>
        <h3>Kilograms: {this.state.total}</h3>
        <h3>Pounds: {(this.state.total * 2.20462).toFixed(2)}</h3>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage