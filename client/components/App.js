import React from 'react';
import { connect } from 'react-redux';

const App = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button type="button" onClick={() => props.increment()}>
        Increment
      </button>
      <button type="button" onClick={() => props.decrement()}>
        Decrement
      </button>
      <button type="button" onClick={() => props.incrementAsync()}>
        Increment after 1s
      </button>
      <div>{props.value}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { value: state };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    incrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
