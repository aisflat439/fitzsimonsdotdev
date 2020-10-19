import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';

import { requestReview } from '../redux/actions/gtmActions';
import Contact from './Contact';
import NewsletterSignup from './NewsletterSignup';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const ContactMeDialog = ({ title, form }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const isContactForm = form === 'contact';

  const handleOpen = (e) => {
    dispatch(requestReview(e.target.textContent));
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>{title}</Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {isContactForm
          ? (<DialogTitle id="alert-dialog-slide-title">Request a site review</DialogTitle>)
          : (<DialogTitle id="alert-dialog-slide-title" data-testid="newsletter-title">Sign up for updates</DialogTitle>)}

        <DialogContent>
          {isContactForm ? (
            <>
              <DialogContentText id="alert-dialog-slide-description">
                Every now and again I look talking through what I do and don't like about a website. If you're so inclined, I'm happy to review your site! It's just one persons opinion but I'll do my best to provide actionable feedback and suggestions. You're under no obligation to do anything with the review. It's just a random person on the internet saying what they like and dislike about a site on YouTube.
              </DialogContentText>
              <Contact handleClose={handleClose} />
            </>
          ) : (
              <>
                <DialogContentText id="alert-dialog-slide-description">
                  Sign up for updates!
              </DialogContentText>
                <NewsletterSignup />
              </>
            )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Nevermind
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactMeDialog;
