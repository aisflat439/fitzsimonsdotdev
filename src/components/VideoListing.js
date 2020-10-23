import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '50%',
  },
  listItemText: {
    marginLeft: '1rem'
  },
  descriptionText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& a': {
      minWidth: '7rem'
    },
    [theme.breakpoints.up('sm')]: {
      '& a': {
        marginLeft: '.5rem',
      },
      flexDirection: 'row',
    },
  },
  videoTitle: {
    fontSize: '1.5rem',
  },
  recordingTime: {
    color: 'darkgrey'
  }
}));

const formatVideoDate = (dateString) => {
  const date = new Date(dateString);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return `${month} ${day}, ${year}`;
};

const VideoListing = ({ video }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem key={video.publishedAt} alignItems="flex-start">
        <ListItemAvatar>
          <Img className={classes.image} fixed={video.localThumbnail.childImageSharp.fixed} />
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary={(
            <>
              <Typography component="h2" className={classes.videoTitle}>{video.title}</Typography>
              <Typography component="small" className={classes.recordingTime}>{formatVideoDate(video.publishedAt)}</Typography>
            </>
          )}
          secondary={(
            <>
              <Typography
                component="span"
                className={classes.descriptionText}
                variant="body2"
                color="textPrimary"
              >
                {video.description}
                <MuiLink
                  target="blank"
                  rel="noopener"
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                >
                  view on youtube
                </MuiLink>
              </Typography>
            </>
          )}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default VideoListing;
