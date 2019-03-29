A repo to investigate React's new hooks. Somewhere to discover patterns and test practice.

## Counter

Trivial little component - a button that displays the number of times it has been clicked. Initially implemented as a stateful class component. Will convert to a functional component using the _useStsate_ hook to manage its state.

Refactored _counter_ to a functional component, bringing in _useState_ to manage its state (count value). Had to amend the tests to use _mount_ instead of _shallow_ as enzyme's _shallow_ does not appear to support hooks yet:

https://github.com/reactjs/rfcs/issues/71

## Simple Form
A (very!) simple form implemented first as a class managing its own state. Then refactored to first use _useState_ for each input element, subsequently refactored to use a custom hook to manage each input generically.

## Complex Form
Well, not very complex at all! Still a very basic form but this one will eventually have some validation and the intent is to create a custom hook that will mimic the basic features of _Formik_. First step was create the form as a class component and then refactor to a functional component using _useState_ for its state management. This was then refactored to bundle this in a custom hook.

Now created a custom hook that mimics _the very basic_ functionality of the brilliant [Formik](https://github.com/jaredpalmer/formik). Tempted to call it _useFormica_ (as it's a cheap imitation!) but, er, didn't!

## Data Retrieval
Added a simple search component that calls an api and displays the results, using _useEffect_. Currently this is a little contrived, as it uses _useEffect_ to call the api with a default search term on render, and as this sets a term in state, we have to make sure that we don't have that term in the _useEffect_ dependencies, or we'd get into an infinite loop (i.e. api resolution sets the state which in turn is a dependency which will force the _useEffect_ again, _and on..._).

To capture the search term we use another state variable, but as we don't want to query on every change we use _another_, triggered by the search button, to actually trigger the _useEffect_. This means we can't have the query term as a dependency - all fine but the React hooks linter doesn't like this. I'll revisit this.

### Eliminate dependencies
To pass the _react-hooks/exhaustive-deps_ linting rule, I refactored _ArticleSearch_ to remove this state item from the component; so the search input is now uncontrolled and we use the _useRef_ hook to set its initial value, set focus etc. Seeking to remove the dependency to pass the lint warning may push us towards extracting the search input and button into its own dedicated component (reminds me of Uncle Bob's 'extract til you drop' mantra in a slightly different context). I'm not going to do that here as I'm really just looking at hooks for now.
