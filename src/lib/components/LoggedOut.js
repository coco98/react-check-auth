import React from 'react';

const LoggedOut = ( props ) => {
  return !props.isloggedin ? (
    React.cloneElement(props.children, { ...props.userInfo })
  ) : null;
};

export default LoggedOut;
