import { connect } from 'react-redux';
import './LoggedIn.css';

import { generateValidChilds } from '../utils/generateElem';

/*
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
*/
const LoggedIn = ( props ) => {
  return props.isLoggedIn ? (
    generateValidChilds(props.children, { isLoggedIn: props.isLoggedIn, userInfo: props.userInfo, fetchError: props.fetchError })
  ) : null;
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(LoggedIn);
