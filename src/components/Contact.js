import React from 'react'
import { makeStyles } from "@material-ui/core"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import { encode } from '../utils'

const useStyles = makeStyles(({ palette }) => ({
    form: {
        backgroundColor: palette.primary.contrastText,
        display: "flex",
    },
}));

const Contact = () => {
    const classes = useStyles()
    const [email, setEmail] = React.useState('')
    const [domain, setDomain] = React.useState('')

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", "email": email, "domain": domain })
        })
            .then(() => alert("Success! I'm sorry, I just haven't had time to do this correctly yet."))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => {
        e.target.name === 'email' ? setEmail(e.target.value) : setDomain(e.target.value);
    }

    return (
        <Card>
            <Box component="form" onSubmit={handleSubmit} className={classes.form}>
                <Input type="hidden" name="bot-field" />
                <TextField
                    onChange={handleChange}
                    label="Email"
                    id="mui-theme-provider-standard-input"
                    variant="outlined"
                    required
                />
                <TextField
                    onChange={handleChange}
                    label="Domain"
                    id="mui-theme-provider-standard-input"
                    variant="outlined"
                    required
                />
                <Button variant="secondary" size='large' type="submit">Sign Up</Button>
            </Box>
        </Card>
    )
}

export default Contact