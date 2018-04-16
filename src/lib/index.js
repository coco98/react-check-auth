import React from 'react';
import CheckAuthComp from './components/CheckAuth';
import LoggedOut from './components/LoggedOut';
import LoggedIn from './components/LoggedIn';

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

class ProviderWrapped extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <CheckAuthComp { ...this.props }>
          { this.props.children }
        </CheckAuthComp>
      </Provider>
    );
  }
}

export default ProviderWrapped;
export { LoggedOut, LoggedIn };
