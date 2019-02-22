import React from 'react';
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

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  button {
    background-color: hsl(112, 52%, 40%);
    color: white;
    min-width: 4rem;
    padding: 0.4em 0.6rem;
    font-size: 1.4rem;
    border-radius: 0.4em;
  }
`;

class ComplexForm extends React.Component {
  state = {
    values: {
      firstName: '',
      secondName: '',
      email: ''
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ values: { [name]: value } });
  };

  render = () => {
    const { values } = this.state;
    return (
      <FormWrapper>
        <FormItem>
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={this.onChange}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="second-name">Second name</label>
          <input
            id="second-name"
            name="secondName"
            type="text"
            value={values.secondName}
            onChange={this.onChange}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={this.onChange}
          />
        </FormItem>
        <FormButtons>
          <button type="submit">Submit</button>
        </FormButtons>
      </FormWrapper>
    );
  };
}

export default ComplexForm;
