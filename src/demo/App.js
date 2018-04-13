import React from 'react';
import { CheckAuthComp, LoggedIn, LoggedOut } from '../lib';

const LoginSuccess = ( props ) =>
  <div>
    { `Hello ${ props.userinfo.name }` } @ { props.userinfo.email }
  </div>;

const LoginFailed = ( props ) =>
  <div>
    <a href="https://google.com">Click to login</a>
  </div>;

const App = () => (
  <div>
    <CheckAuthComp authEndpoint={'https://auth.catalpa92.hasura-app.io/v1/user/info'}>
      { ( userinfo ) => {
          return [
            <LoggedIn key={1} { ...userinfo }>
              <LoginSuccess />
            </LoggedIn>,
            <LoggedOut key={2} { ...userinfo }>
              <LoginFailed />
            </LoggedOut>
          ];
        }
      }
    </CheckAuthComp>
  </div>
);

export default App;
