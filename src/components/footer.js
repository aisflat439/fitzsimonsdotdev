import React from "react"
import { Link, useStaticQuery } from "gatsby"

import styled from "styled-components"
import { colors } from "../theme"

const StyledFooter = styled.footer`
  background: ${colors.secondary}
`

const Footer = () => {
    const { allDirectory } = useStaticQuery(graphql`
    query FoldersQuery {
        allDirectory {
            edges {
                node {
                    base
                }
            }
        }
    }
    `)
    return (
        <StyledFooter data-testid="footer">
        <section>
            <h5>email</h5>
            <p>sign up for updates</p>
        </section>
        <section>
            <h5>links</h5>
            <ul>
                { allDirectory.edges.map(({node}) => {
                    if (node.base === 'deprecated' || node.base === 'images') return null
                        return (
                    <li>
                        <Link to={`/${node.base}`}>{`${node.base}`}</Link>
                    </li>
                        )
                        })}
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
