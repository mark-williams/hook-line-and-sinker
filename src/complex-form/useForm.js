import { useState } from 'react';

const useForm = (initialValues, validate, onSubmit) => {
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
  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    } else {
      setErrors(validationErrors);
    }
  };
  return {
    values,
    errors,
    onChange,
    onBlur,
    handleSubmit
  };
};

export default useForm;
