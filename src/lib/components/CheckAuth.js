import React from 'react';

// {React.cloneElement(children, { isLoggedIn: isLoggedIn })}

const AppContent = ({apps, authEndpoint, isLoggedIn}) => {
	console.log(isLoggedIn);
	console.log(authEndpoint);
	console.log(apps);
	console.log(apps[0]);
	/*
	const childrenWithProps = React.Children.map(apps, child => {
        return React.cloneElement(child, { isLoggedIn: isLoggedIn });
	});
	*/
	return (
	  <div>
	  	{apps}
	  </div>
	);
	// return "Logged In";
}

function renderBasedOnLogin(Component) {
  return function EnhancedComponent({ ...props }) {
	console.log('AAAAAAAAAAAAAAAAAAAAAAA');
	console.log(props);
    if (props.isLoggedIn) {
      return <Component { ...props } />;
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
		return (
		  <div>
			<CheckAuth isLoggedIn={true} authEndpoint={this.props.authEndpoint} apps={this.props.children} />
		  </div>
		);
	}
}

export default CheckAuthComp;

// export { AppContent };

