import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"
import { colors } from "../theme"

const StyledFooter = styled.footer`
  background: ${colors.secondary}
`

const Footer = () => {
    return (
        <StyledFooter data-testid="footer">
        <section>
            <h5>email</h5>
            <p>sign up for updates</p>
        </section>
        <section>
            <h5>links</h5>
            <ul>
            <li>
                <Link to="/tips">Tips</Link>
            </li>
            <li>
                <Link to="/site-reviews">Site Reviews</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/thoughts">Thoughts</Link>
            </li>
            </ul>
        </section>
        <section>
            <h5>social</h5>
            <ul>
            <li>twitter</li>
            <li>instagram</li>
            <li>linkedin</li>
            </ul>
        </section>
        © {new Date().getFullYear()}
    </StyledFooter>
    )
}

export default Footer