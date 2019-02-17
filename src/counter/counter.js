import React, { useState } from 'react';
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
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return <Button onClick={incrementCount}>{count}</Button>;
};

export default Counter;
