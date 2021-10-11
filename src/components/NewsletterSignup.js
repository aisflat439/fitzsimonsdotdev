import React from 'react';
import styled from 'styled-components';

import { encode } from '../utils';

const NewsletterSignup = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email }),
    })
      .then(() =>
        alert(
          "Success! I'm sorry, I just haven't had time to do this correctly yet."
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyledForm
      name="newsletter"
      method="post"
      noValidate
      autoComplete="off"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <HiddenInput type="hidden" name="bot-field" />
      <StyledInput
        onChange={handleChange}
        label="Email"
        id="mui-theme-provider-standard-input"
        required
      />
      <button type="submit">Sign Up</button>
    </StyledForm>
  );
};

export default NewsletterSignup;

const StyledForm = styled.form`
  diplay: flex;
`;

const StyledInput = styled.input`
  diplay: flex;
`;

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;
