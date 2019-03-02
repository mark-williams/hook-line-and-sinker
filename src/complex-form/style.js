import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 20rem;
  border: 1px solid hsl(0, 0%, 62%);
  background-color: hsl(240, 20%, 96%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
FormWrapper.displayName = 'FormWrapper';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
  label {
    margin-right: 1rem;
    margin-bottom: 0.2rem;
    width: 7rem;
  }
  input {
    width: 18rem;
    height: 1.2rem;
  }
`;
FormItem.displayName = 'FormItem';

export const FormButtons = styled.div`
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
FormButtons.displayName = 'FormButtons';

export const ValidationError = styled.div`
  color: hsl(0, 40%, 50%);
`;
ValidationError.displayName = 'ValidationError';
