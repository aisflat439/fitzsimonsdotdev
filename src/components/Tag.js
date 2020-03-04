import React from "react"

import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Link from '../components/Link'

const Tag = ({ title, count }) => (
  <Card>
    <CardContent>
      <Link to={`/categories/${title}`}>
        <Typography>{title}</Typography>
        <Typography>{count}</Typography>
      </Link>
    </CardContent>
  </Card>
)

export default Tag