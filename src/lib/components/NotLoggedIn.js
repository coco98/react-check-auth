import React from 'react';
import './NotLoggedIn.css';

class NotLoggedIn extends React.Component  {
	render() {
		console.log(this.props);
		return	(
		  <div>
		    Not logged in
		  </div>
		);
	}
}

export default NotLoggedIn;
