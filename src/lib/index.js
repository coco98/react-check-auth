import React from 'react';
import CheckAuthComp from './components/CheckAuth';
import LoggedOut from './components/LoggedOut';
import LoggedIn from './components/LoggedIn';
import CheckAuth from './components/CustomCheckAuth';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
};

const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

const ProviderWrapped = (props) =>
  <Provider store={ store }>
    <CheckAuthComp { ...props }>
      { props.children }
    </CheckAuthComp>
  </Provider>

export default ProviderWrapped;
export { CheckAuth, LoggedOut, LoggedIn };
