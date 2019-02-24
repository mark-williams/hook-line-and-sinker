import React, { useState } from 'react';
import { FormWrapper, FormItem, FormButtons, ValidationError } from './style';

const validateForm = values => {
  const errors = {};

  if (values.firstName.length < 1) {
    errors.firstName = 'You must enter a first name';
  }

  if (values.secondName.length < 1) {
    errors.secondName = 'You must enter a last name';
  }

  if (values.email.length < 1) {
    errors.email = 'You must enter an email address';
  }

  return errors;
};

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    onChange,
    onBlur
  };
};

const ComplexForm = () => {
  const { values, errors, onChange, onBlur } = useForm(
    {
      firstName: '',
      secondName: '',
      email: ''
    },
    validateForm
  );

  const onSubmit = e => {
    e.preventDefault();
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
            onBlur={onBlur}
          />
          {errors.firstName && (
            <ValidationError>{errors.firstName}</ValidationError>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="second-name">Second name</label>
          <input
            id="second-name"
            name="secondName"
            type="text"
            value={values.secondName}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.secondName && (
            <ValidationError>{errors.secondName}</ValidationError>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.email && <ValidationError>{errors.email}</ValidationError>}
        </FormItem>
        <FormButtons>
          <button type="submit">Submit</button>
        </FormButtons>
      </form>
    </FormWrapper>
  );
};

export default ComplexForm;
