import React from "react"

import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

import { avatarLengthHandler } from "../utils"

const HomePageCardContent = ({ avatar, title, subheader, content }) => (
  <>
    <CardHeader
      avatar={
        <Avatar aria-label={avatar}>
          {avatarLengthHandler(avatar)}
        </Avatar>
      }
      title={title}
      titleTypographyProps={{ component: 'h2' }}
      subheader={subheader} />
    <CardContent>
      <Typography>
        {content}
      </Typography>
    </CardContent>
  </>
)

export default HomePageCardContent;