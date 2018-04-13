import React from 'react';

// {React.cloneElement(children, { isLoggedIn: isLoggedIn })}

class CheckAuthComp extends React.Component  {
  constructor() {
    super();
    this.state = {};
    this.state.isloggedin = true;
    this.state.userinfo = {
      'name': 'karthik1',
      'email': 'karthik@hasura.io',
    };
  }
  componentDidMount () {
    if(this.props.authEndpoint) {
      // make auth api fetch call and don't repeate api calls
    }
  }
  render() {
    return (
      <div>
        { this.props.children({ ...this.state }) }
      </div>
    );
  }
}

export default CheckAuthComp;

// export { AppContent };

