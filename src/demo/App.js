import React from 'react';
import { CheckAuthComp, LoggedIn, NotLoggedIn} from '../lib';

const App = () => (
  <div>
    <CheckAuthComp authEndpoint={'https://auth.catalpa92.hasura-app.io/v1/user/info'}>
    	<LoggedIn>
    		Hi
    	</LoggedIn>
    	<NotLoggedIn>
    		Login now
    	</NotLoggedIn>
    </CheckAuthComp>

  </div>
);

export default App;
