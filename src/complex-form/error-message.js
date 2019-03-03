import React from 'react';
import PropTypes from 'prop-types';

import { ValidationError } from './style';

const ErrorMessage = ({ name, errors, touched, isSubmitting }) => {
  if (isSubmitting || (errors[name] && touched[name])) {
    return <ValidationError>{errors[name]}</ValidationError>;
  }
  return null;
};

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

export default ErrorMessage;
