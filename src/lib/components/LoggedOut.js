import React from 'react';
import { connect } from 'react-redux';

const LoggedOut = ( props ) => {
  return !props.isLoggedIn ? (
    React.cloneElement(props.children, { ...props.userInfo })
  ) : null;
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(LoggedOut)
