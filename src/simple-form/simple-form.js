import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 20rem;
  border: 1px solid hsl(0, 0%, 62%);
  background-color: hsl(240, 20%, 96%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
  label {
    margin-right: 1rem;
    width: 7rem;
  }
  input {
    width: 10rem;
    height: 1.2rem;
  }
`;

const SimpleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else {
      setSecondName(value);
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
          onChange={onChange}
          value={firstName}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="second-name">Second name</label>
        <input
          id="second-name"
          name="secondName"
          type="text"
          onChange={onChange}
          value={secondName}
        />
      </FormItem>
    </FormWrapper>
  );
};

export default SimpleForm;
