import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ul {
    list-style-type: none;
    margin-block-start: 0;
    padding-inline-start: 0;
  }
  li {
    margin-bottom: 0.6em;
  }
`;

const Home = () => (
  <Fragment>
    <h1>React Hooks</h1>
    <p>
      A little sandbox project to explore React Hooks patterns and (of course)
      testing.
    </p>
    <MenuContainer>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/simple-form">Simple Form</Link>
        </li>
        <li>
          <Link to="/complex-form">Complex Form</Link>
        </li>
      </ul>
    </MenuContainer>
  </Fragment>
);

export default Home;
