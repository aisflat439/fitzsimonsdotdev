import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
  }

  updateTotal = () => {
    this.setState(
      { total: this.state.total + (25 * 2) }
    )
  }

  render() {
    return (
    <Layout>
      <SEO title="Barbell Calculator" />
      <h1>Calculate your barbells in Metric!</h1>
      <div className="weights-container">
        <div className="weight red" onClick={this.updateTotal}>25kg</div>
        <div className="weight blue">20kg</div>
        <div className="weight yellow">15kg</div>
        <div className="weight green">10kg</div>
        <div className="weight white">5kg</div>
        <div className="weight black">2.5kg</div>
        <div className="weight silver">1.25kg</div>
        <div className="weight silver">.5kg</div>
        <div className="weight silver">.5kg</div>
      </div>
      <h3>Weight: {this.state.total}</h3>
      <h3>Weight: {this.state.total * 2.20462}</h3>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
  }
}

export default SecondPage
