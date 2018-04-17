import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../context';

class CustomCheckAuth extends React.Component {
  render() {
    return (
      <Consumer>
        { (props) => this.props.children( { ...props })}
      </Consumer>
    );
  }
};

CustomCheckAuth.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CustomCheckAuth;
