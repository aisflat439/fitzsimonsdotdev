import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import  {makeStyles}  from "@material-ui/core"

const useStyles = makeStyles(({palette}) => ({
    root: {
        backgroundColor: palette.secondary.main,
    }
}))

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

    const classes = useStyles()


    return (
        <Box component="footer" data-testid="footer" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Box component="section" >
                    <Typography component="h5">link</Typography>
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
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="section" >
                        <Typography component="h5">email</Typography>
                        <Typography>I haven't made this yet... but eventually</Typography>
                        <Typography>sign up for updates</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography>social</Typography>
                    <ul>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>linkedin</li>
                    </ul>
                </Grid>
            </Grid>
        © {new Date().getFullYear()}
    </Box>
    )
}

export default Footer
