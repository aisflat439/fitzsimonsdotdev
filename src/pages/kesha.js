import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { lyrics } from "../data/kesha"

const buildLorem = (numLines, ipsumArray) => {

    let ipsumText = ""
    for (let i = 0; i < numLines; i++) {
      ipsumText +=
        "" + ipsumArray[Math.floor(Math.random() * ipsumArray.length)]
    }

    // console.log("numLines ", numLines);
    // [...Array(4)].forEach(function() {
    //   console.log("gomggmo")
    // })
  
  // let lorem = ""

  // [...Array(numLines)].forEach((item, index) => lorem += ipsumArray[Math.floor(Math.random() * ipsumArray.length)])

  // return lorem
  return ipsumText
}

const IndexPage = () => {
  // console.log("eeeyy", lyrics)
  const [numLines, setLines] = useState(7)
  let ipsumText = buildLorem(numLines, lyrics)

  return (
    <Layout>
      <SEO
        title="Kesha Ipsum"
        keywords={[`Lorem Ipsum Generator`, `kesha ipsum`, `ipsum`]}
      />
      <h1>We are the crazy people</h1>
      <div>
        <label>Lines of text per paragraph</label>
        <input type="number" defaultValue={7} />
        <label> Number of Paragraphs</label>
        <input type="number" defaultValue={3} />
        <button>Copy to Clipboard</button>
        <button>Generate</button>
        <div className="ipsum-content-container">
          <Lyric lyric={ipsumText} />
        </div>
      </div>
      <Link to="/page-2/">Barbell Calculator</Link>
      <Link to="/kesha/">Kesha Ipsum</Link>
    </Layout>
  )
}

const Lyric = ({lyric}) => (
  <span>{lyric}</span>
)

export default IndexPage
