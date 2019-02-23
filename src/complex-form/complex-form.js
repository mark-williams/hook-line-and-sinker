import React, { useState } from 'react';
import { FormWrapper, FormItem, FormButtons } from './style';

const useForm = () => {
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

  return {
    values: {
      firstName,
      secondName,
      email
    },
    onChange
  };
};

const ComplexForm = () => {
  const { values, onChange } = useForm();

  const onSubmit = () => {
    // eslint-disable-next-line no-alert
    alert('Submitting: ' + JSON.stringify(values, null, 2));
  };

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormItem>
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={onChange}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="second-name">Second name</label>
          <input
            id="second-name"
            name="secondName"
            type="text"
            value={values.secondName}
            onChange={onChange}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={onChange}
          />
        </FormItem>
        <FormButtons>
          <button type="submit">Submit</button>
        </FormButtons>
      </form>
    </FormWrapper>
  );
};

export default ComplexForm;
