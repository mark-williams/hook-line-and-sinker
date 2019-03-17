import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  label {
    margin-right: 0.6rem;
  }
`;

const SearchText = styled.input`
  width: 20rem;
  height: 2rem;
  border-radius: 4px;
  margin-right: 0.6rem;
  font-size: 1rem;
  padding-left: 0.5rem;
`;

const Button = styled.button`
  background-color: hsl(112, 52%, 40%);
  color: white;
  min-width: 4rem;
  padding: 0.5em 0.6rem;
  font-size: 1rem;
  border-radius: 0.4em;
`;

export { SearchContainer, SearchText, Button };
