import React from 'react'
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import { encode } from '../utils'

const NewsletterSignup = () => {
    const [email, setEmail] = React.useState('')

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "newsletter", "email": email })
        })
            .then(() => alert("Success! I'm sorry, I just haven't had time to do this correctly yet."))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => {
        e.target.name === 'email' ? setEmail(e.target.value) : setDomain(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
                </label>
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
}

export default NewsletterSignup