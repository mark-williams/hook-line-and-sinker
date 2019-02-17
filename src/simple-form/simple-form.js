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

const useFormInput = () => {
  const [value, setValue] = useState('');
  return { value, onChange: e => setValue(e.target.value) };
};

const SimpleForm = () => {
  const first = useFormInput();
  const second = useFormInput();

  return (
    <FormWrapper>
      <FormItem>
        <label htmlFor="first-name">First name</label>
        <input id="first-name" name="firstName" type="text" {...first} />
      </FormItem>
      <FormItem>
        <label htmlFor="second-name">Second name</label>
        <input id="second-name" name="secondName" type="text" {...second} />
      </FormItem>
    </FormWrapper>
  );
};

export default SimpleForm;
