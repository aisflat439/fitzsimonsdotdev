import React from "react"
import Typography from "@material-ui/core/Typography"
import Link from './Link'


const PostSnippet = ({ title, excerpt, slug }) => (
    <>
        <Typography component="h1" variant="h5" display="inline">{title}</Typography>
        <Typography>{excerpt}</Typography>
        <Link to={slug}>yeee</Link>
    </>
)

export default PostSnippet