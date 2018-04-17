# react-check-auth

## Installation

``` bash
$ npm install --save react-check-auth
```

## Simple Usage

``` javascript
  import React from 'react';
  import CheckAuth from 'react-check-auth';

  const App = () => (
    <div>
      <CheckAuth> 
        { ({ isLoading, userInfo, error }) => { 
          if ( isLoading ) { 
            return ( <span>Loading...</span> )
          }
          return ( !userInfo ? 
            (<div>
              <a href={'https://auth.commercialization66.hasura-app.io/ui?redirect_url=http://localhost:3000'}>Login</a>
            </div>)
            : 
            (<div>
              {Hello ${ userInfo.username }}
            </div>) );
        }}
      </CheckAuth>
    </div>
  );
```

## Use Cases

`React Check Auth` can be applied to commonly used cases like 

### Frontend Session Management

### Using with React Router

With React Router v4, you can call the Route inside your CheckAuth component or wrap your entire application with CheckAuth, like this -

``` javascript
  import React from 'react';
  import { Route, Switch } from 'react-router-dom';

  import App from './App.js'
  import SigninPage from './SigninPage';

  export default () => (
    <Switch>
      <Route path='/home' component={App}/>
      <Route path='/signin' component={SiginPage}/>
    </Switch>
);

```

And inside your App.js component render, you can wrap it entirely with <CheckAuth>,

``` javascript
render () {
    <CheckAuth> 
      { ({ isLoading, userInfo, error }) => { 
        if ( isLoading ) { 
          return ( <span>Loading...</span> )
        }
        return ( !userInfo ? 
          (<div>
            Please Login
          </div>)
          : 
          (<div>
            {Hello ${ userInfo.username }}
            <Component1 />
            <Component2 />
          </div>) );
      }}
    </CheckAuth>
  }
```

### Third-party Auth Providers

#### Hasura

#### Firebase

`CheckAuth` can be integrated with Firebase.

```
  // replace API_KEY with your Firebase API Key and ID_TOKEN appropriately.
  const reqObject = {'url': 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=[API_KEY]', 'method': 'POST', 'payload': {'idToken': '[ID_TOKEN]'}, 'headers': {'content-type': 'application/json'}};

  // pass the above reqObject to CheckAuth
  <CheckAuth authReqObject={reqObject}>
    { ({ isLoading, userInfo, error }) => { 
      // your implementation here
    } }

  </CheckAuth>
```

#### Auth0


## Contributing

Clone repo

````
git clone https://github.com/hasura/react-check-auth.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Library files

All library files are located inside `src/lib`  

### Demo app

Is located inside `src/demo` directory, here you can test your library while developing

### Testing

`npm run test` or `yarn run test`

### Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

