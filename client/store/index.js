import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducer = (state = 0, action) => {
  console.log('action: ', action);

  const actionMap = {
    INCREMENT: () => {
      return state + 1;
    },
    DECREMENT: () => {
      return state - 1;
    },
  };
  return actionMap[action.type] ? actionMap[action.type](action) : state;
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;
