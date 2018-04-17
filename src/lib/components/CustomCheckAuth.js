import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class CustomCheckAuth extends React.Component {
  render() {
    return (
      <div>
        { this.props.children( { ...this.props })}
      </div>
    );
  }
};

CustomCheckAuth.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(CustomCheckAuth);
