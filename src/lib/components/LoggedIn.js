import React from 'react';
import './LoggedIn.css';

class LoggedIn extends React.Component  {
	render() {
		console.log(this.props);
		return	(
		  <div>
		    Hey i'm logged in!
		  </div>
		);
	}
}

export default LoggedIn;
