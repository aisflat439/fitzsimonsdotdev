import React from 'react';
import { encode } from '../utils';

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [domain, setDomain] = React.useState('');

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', email, domain })
    })
      .then(() => {
        console.log('blah blah blah');
        alert("Success! I'm sorry, I just haven't had time to do this correctly yet.");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    e.target.name === 'email' ? setEmail(e.target.value) : setDomain(e.target.value);
  };

  return (
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="on"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="first_name">
          First Name
          <input type="first_name" name="first_name" placeholder="Prince" onChange={handleChange} />
        </label>
        <label htmlFor="last_name">
          Last Name
          <input type="last_name" name="last_name" placeholder="Nelson" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email Address
          <input type="email" name="email" placeholder="email@mail.com" required onChange={handleChange} />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Contact;
