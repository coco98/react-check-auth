import React from 'react';
import CheckAuthComp, { LoggedIn, LoggedOut } from '../lib';

const LoginSuccess = ( props ) => {
  return (
    <div>
      { `Hello ${ props.userInfo.username }` }
    </div>
  );
}

const LoginFailed = ( props ) =>
  <div>
    <a href="https://auth.commercialization66.hasura-app.io/ui?redirect_url=http://localhost:3000/">Click to login</a>
  </div>;

const App = () => (
  <div>
    <CheckAuthComp authEndpoint={'https://auth.commercialization66.hasura-app.io/v1/user/info'}>
      <LoggedIn>
        <LoginSuccess />
      </LoggedIn>
      <LoggedOut>
        <LoginFailed />
      </LoggedOut>
    </CheckAuthComp>
  </div>
);

export default App;
