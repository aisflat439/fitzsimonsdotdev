import React from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

import Link from '../components/Link'

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    textTransform: 'capitalize',
  },
  card: {
    padding: '.5rem',
    '&:last-child': {
      paddingBottom: '.5rem',
    }
  }
}))

const Tag = ({ title, count }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.card}>
        <Link
          className={classes.link}
          to={`/categories/${title}`}>
          <Typography className={classes.text}>{title}</Typography>
          <Typography>{count}</Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default Tag