import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { encode } from '../utils';

const StyledForm = styled.form`
  input {
    margin: 0 0 1rem 1rem;
    height: 1.5rem;
    border: none;
    border-bottom: 1px solid; 

    &:focus {
      outline: none;
      border: none;
      border-bottom: 2px solid; 
    }
  }
`;

const Contact = ({ handleClose }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleSubmit = (e) => {
    const { firstName, lastName, email } = formValues;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', email, firstName, lastName
      })
    })
      .then(() => {
        handleClose();
        setFormValues(initialValues);
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <StyledForm
        style={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="on"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" placeholder="Prince" onChange={handleChange} value={formValues.firstName} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" placeholder="Nelson" onChange={handleChange} value={formValues.lastName} />
        </label>
        <label htmlFor="email">
          Email Address:
          <input type="email" name="email" placeholder="email@mail.com" required onChange={handleChange} value={formValues.email} />
        </label>
        <button type="submit">submit</button>
      </StyledForm>
    </>
  );
};

Contact.propTypes = {
  handleClose: T.func.isRequired,
};

export default Contact;
