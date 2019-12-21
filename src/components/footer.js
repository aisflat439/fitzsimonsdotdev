import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
        <div data-testid="footer">
        <section>
            <h5>email</h5>
            <p>sign up for updates</p>
        </section>
        <section>
            <h5>link</h5>
            <ul>
                { allDirectory.edges.map(({node}) => {
                    if (node.base === 'deprecated' || node.base === 'images'|| node.base === 'posts') return null
                        return (
                            <li key={node.id}>
                        <Link  to={`/${node.base}`}>{`${node.base}`}</Link>
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
    </div>
    )
}

export default Footer
