import styled from 'styled-components';
export const FormWrapper = styled.div`
  width: 20rem;
  border: 1px solid hsl(0, 0%, 62%);
  background-color: hsl(240, 20%, 96%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const FormItem = styled.div`
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
