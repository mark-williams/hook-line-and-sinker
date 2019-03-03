import React, { useRef, useEffect } from 'react';
import useForm from './useForm';
import { FormWrapper, FormItem, FormButtons } from './style';
import ErrorMessage from './ErrorMessage';

const validateForm = values => {
  const errors = {};

  if (values.firstName.trim().length < 1) {
    errors.firstName = 'You must enter a first name';
  }

  if (values.secondName.trim().length < 1) {
    errors.secondName = 'You must enter a last name';
  }

  if (values.email.trim().length < 1) {
    errors.email = 'You must enter an email address';
  }

  return errors;
};

const ComplexForm = () => {
  const onSubmit = values => {
    // eslint-disable-next-line no-alert
    alert('Submitting: ' + JSON.stringify(values, null, 2));
  };

  const {
    values,
    errors,
    touched,
    onChange,
    onBlur,
    handleSubmit,
    isSubmitting
  } = useForm(
    {
      firstName: '',
      secondName: '',
      email: ''
    },
    validateForm,
    onSubmit
  );

  const firstNameRef = useRef(null);

  useEffect(() => {
    if (firstNameRef) {
      firstNameRef.current.focus();
    }
  }, [firstNameRef]);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={onChange}
            onBlur={onBlur}
            ref={firstNameRef}
          />
          <ErrorMessage
            name="firstName"
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
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
            onBlur={onBlur}
          />
          <ErrorMessage
            name="secondName"
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
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
            onBlur={onBlur}
          />
          <ErrorMessage
            name="email"
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
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
