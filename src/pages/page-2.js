import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Weight from "../components/weight"
import WeightOutput from "../components/weightOutput"
import Barbell from "../components/barbell"
import SEO from "../components/seo"
import { weights, barbells } from "../data/data"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      barbell: "",
      barbellWeight: 0,
      total: 0,
      metric: true,
      reset: 0,
    }
    this.updateTotalByWeights = this.updateTotalByWeights.bind(this)
    this.updateBarbell = this.updateBarbell.bind(this)
    this.resetTotal = this.resetTotal.bind(this)
    this.toggleMetric = this.toggleMetric.bind(this)
  }

  updateTotalByWeights = value => {
    this.setState({ 
        total: this.state.total + value * 2,
      })
  }

  updateBarbell = (barbellName, newBarbellWeight) => {
    const newTotal = this.state.total - this.state.barbellWeight + newBarbellWeight
    this.setState({
      barbell: barbellName,
      total: newTotal,
      barbellWeight: newBarbellWeight,
    })
  }

  toggleMetric = () => {
    this.setState({
      barbell: "",
      barbellWeight: 0,
      total: 0,
      clicks: 0,
      reset: !this.state.reset,
      metric: !this.state.metric,
    })
  }

  resetTotal = () => {
    this.setState({
      barbell: "",
      barbellWeight: 0,
      total: 0,
      clicks: 0,
      reset: !this.state.reset,
    })
  }

  render() {

    return (
      <Layout>
        <SEO title="Barbell Calculator" />
        <h1>
          Calculate your barbells in{" "}
          {this.state.metric ? "Metric" : "Imperial"}!
        </h1>
        <div className="container">
          {barbells.map(b => (
            <Barbell
              key={b.name}
              name={b.name}
              weight={this.state.metric ? b.kg : b.lbs}
              updateBarbell={this.updateBarbell}
            />
          ))}
        </div>
        <div className="container">
          {weights.map(w => (
            <Weight
              reset={this.state.reset}
              metric={this.state.metric}
              key={w.kg}
              incrementTotal={this.updateTotalByWeights}
              weight={ w.kg}
              color={w.color}
            />
          ))}
        </div>
        <div className="container">
          {weights.map(w => (
            <Weight
              reset={this.state.reset}
              metric={!this.state.metric}
              key={w.kg}
              incrementTotal={this.updateTotalByWeights}
              weight={ w.lbs}
              color={w.color}
            />
          ))}
        </div>
        <div className="container">
          <button className="click-target" onClick={this.resetTotal}>
            reset
          </button>
        </div>
        <WeightOutput total={this.state.total} units={this.state.metric} />
        <Link to="/">Go back to the homepage</Link>
        <Link to="/kesha">Kesha Ipsum</Link>
      </Layout>
    )
  }
}

export default SecondPage