import React from 'react';

class Counter extends React.Component {
  state = { count: 0 };

  onClick = () => this.setState(state => ({ count: state.count + 1 }));
  render = () => {
    const { count } = this.state;

    return <button onClick={this.onClick}>{count}</button>;
  };
}

export default Counter;
