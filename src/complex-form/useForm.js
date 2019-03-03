import { useState, useRef } from 'react';

const useForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const isSubmitting = useRef(false);

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const onBlur = e => {
    const { name } = e.target;
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    } else {
      setErrors(validationErrors);
      isSubmitting.current = true;
    }
  };
  return {
    values,
    errors,
    touched,
    onChange,
    onBlur,
    handleSubmit,
    isSubmitting: isSubmitting.current
  };
};

export default useForm;
