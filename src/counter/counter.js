import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: hsl(250, 40%, 50%);
  color: white;
  min-width: 4rem;
  padding: 0.4em 0.6rem;
  font-size: 1.4rem;
  border-radius: 0.4em;
`;
Button.displayName = 'Button';

const Counter = () => {
  return <Button>{0}</Button>;
};

export default Counter;
