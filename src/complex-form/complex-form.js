import React, { useState } from 'react';
import { FormWrapper, FormItem, FormButtons } from './style';

const ComplexForm = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');

  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;

      case 'secondName':
        setSecondName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  return (
    <FormWrapper>
      <FormItem>
        <label htmlFor="first-name">First name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={onChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="second-name">Second name</label>
        <input
          id="second-name"
          name="secondName"
          type="text"
          value={secondName}
          onChange={onChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={onChange}
        />
      </FormItem>
      <FormButtons>
        <button type="submit">Submit</button>
      </FormButtons>
    </FormWrapper>
  );
};

export default ComplexForm;
