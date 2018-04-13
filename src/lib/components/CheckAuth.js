import React from 'react';

// {React.cloneElement(children, { isLoggedIn: isLoggedIn })}

const AppContent = ({children, authEndpoint, isLoggedIn}) => {
	console.log(isLoggedIn);
	console.log(authEndpoint);
	console.log(children);
	const childrenWithProps = React.Children.map(children, child => {
		console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
		console.log(children);
		console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
        React.cloneElement(children, { isLoggedIn: isLoggedIn })
	});
	console.log(childrenWithProps);
	return (
	  <div>
	  	{childrenWithProps}
	  </div>
	);
	// return "Logged In";
}

function renderBasedOnLogin(Component) {
  return function EnhancedComponent({ isLoggedIn, ...props }) {
    if (isLoggedIn) {
      return <Component isLoggedIn={isLoggedIn} { ...props } />;
    }
    return <div><p>Not Logged in...</p></div>;
  };
}

// Usage
const CheckAuth = renderBasedOnLogin(AppContent);

class CheckAuthComp extends React.Component  {

	componentDidMount () {
        console.log('mounted!');
        if(this.props.authEndpoint) {
            // make auth api fetch call and don't repeate api calls
        }
    }

	render() {
	  	console.log('ZZZZZZZZZZZZZZZZZZZ');
		console.log(this.props);
		return (
		  <div>
			<CheckAuth
			  isLoggedIn={true}
			  authEndpoint={this.props.authEndpoint}
			  children={this.props.children}
			/>
		  </div>
		);
	}
}

export default CheckAuthComp;

// export { AppContent };

