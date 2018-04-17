import React from 'react';

import 'whatwg-fetch';

import { connect } from 'react-redux';

import {
  FETCHING_USER_INFO,
  USER_INFO_FETCH_FAIL,
  USER_INFO_FETCHED,
} from '../reducer/';

// {React.cloneElement(children, { isLoggedIn: isLoggedIn })}

class CheckAuthComp extends React.Component  {
  componentDidMount () {
    if(this.props.authEndpoint) {
      // make auth api fetch call and don't repeate api calls
      const oThis = this;
      const options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      this.props.dispatch({ type: FETCHING_USER_INFO });
      fetch(this.props.authEndpoint, options)
        .then(function(response) {
          if (response.status !== 200) {
            return response.json()
            .then((r) => {
              return Promise.reject(r)
            });
          }
          return response.json();
        }).then(function(json) {
          oThis.props.dispatch({ type: USER_INFO_FETCHED, data: json});
        }).catch(function(ex) {
          oThis.props.dispatch({ type: USER_INFO_FETCH_FAIL, data: ex});
        })
    }
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { ...state };
};

export default connect(mapStateToProps)(CheckAuthComp);
