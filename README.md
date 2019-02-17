A repo to investigate React's new hooks. Somewhere to discover patterns and test practice.

## Counter

Trivial little component - a button that displays the number of times it has been clicked. Initially implemented as a stateful class component. Will convert to a functional component using the _useStsate_ hook to manage its state.

Refactored _counter_ to a functional component, bringing in _useState_ to manage its state (count value). Had to amend the tests to use _mount_ instead of _shallow_ as enzyme's _shallow_ does not appear to support hooks yet:

https://github.com/reactjs/rfcs/issues/71

## Simple Form
A (very!) simple form implemented first as a class managing its own state. Then refactored to first use _useState_ for each input element, subsequently refactored to use a custom hook to manage each input generically.
