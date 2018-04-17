import { connect } from 'react-redux';

import { generateValidChilds } from '../utils/generateElem';

const LoggedOut = ( props ) => {
  return !props.isLoggedIn ? (
    generateValidChilds(props.children, { isLoggedIn: props.isLoggedIn, userInfo: props.userInfo, fetchError: props.fetchError })
  ) : null;
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(LoggedOut)
