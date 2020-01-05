import React from 'react'
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const Contact = () => (
    <form name="contact" method="POST" data-netlify="true">
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
    // <Box display="flex" component="form" name="newsletter" method="post" noValidate autoComplete="off" data-netlify="true" data-netlify-honeypot="bot-field">
    //     <Input type="hidden" name="bot-field" />
    //     <TextField
    //         label="Email"
    //         id="mui-theme-provider-standard-input"
    //         variant="outlined"
    //         required
    //     />
    //     <Input type="submit" value="Sign Up" />
    // </Box>
)

export default Contact