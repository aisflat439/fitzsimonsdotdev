import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { lyrics } from "../data/kesha"

const buildLorem = (numLines, numParagraphs, ipsumArray) => {
  let ipsumText = '';

  for (let j = 0; j < numParagraphs; j++) {
    for (let i = 0; i < numLines; i++) {
      ipsumText += ipsumArray[Math.floor(Math.random() * ipsumArray.length)];
      
      ipsumText += ipsumText.split('').pop().match(/^[a-z0-9]+$/i) ? ". " : " " 
    }
    ipsumText += j > 1 ? "" : ""
  }


  return ipsumText
}

const IndexPage = () => {
  const [numLines, setLines] = useState(7)
  const [numParagraphs, setParagraphs] = useState(1)
  let ipsumText = buildLorem(numLines, numParagraphs, lyrics)

  return (
    <Layout>
      <SEO
        title="Kesha Ipsum"
        keywords={[`Lorem Ipsum Generator`, `kesha ipsum`, `ipsum`]}
      />
      <h1>We are the crazy people</h1>
      <div>
        <label>Lines of text per paragraph</label>
        <input type="number" defaultValue={7} onChange={(e) => setLines(e.target.value)}/>
        <label> Number of Paragraphs</label>
        <input type="number" defaultValue={1} onChange={(e) => setParagraphs(e.target.value)}/>
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
