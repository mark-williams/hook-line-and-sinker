import React from 'react';
import { ValidationError } from './style';

const ErrorMessage = ({ name, errors, touched, isSubmitting }) => {
  if (isSubmitting || (errors[name] && touched[name])) {
    return <ValidationError>{errors[name]}</ValidationError>;
  }
  return null;
};

export default ErrorMessage;
