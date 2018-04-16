/* */
const defaultState = {
  isLoggedIn: false,
  isFetching: false,
  userInfo: {},
  fetchError: {},
};

/* */

const FETCHING_USER_INFO = '@customAuth/FETCHING_USER_INFO';
const USER_INFO_FETCHED = '@customAuth/USER_INFO_FETCHED';
const USER_INFO_FETCH_FAIL = '@customAuth/USER_INFO_FETCH_FAIL';

/* */

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case FETCHING_USER_INFO:
      return { ...state, isFetching: true };
    case USER_INFO_FETCHED:
      return { ...state, isFetching: false, isLoggedIn: true, userInfo: action.data, fetchError: {}};
    case USER_INFO_FETCH_FAIL:
      return { ...state, isFetching: false, userInfo: {}, fetchError: action.data };
    default:
      return { ...state };
  }
};

export {
  FETCHING_USER_INFO,
  USER_INFO_FETCH_FAIL,
  USER_INFO_FETCHED
};

export default reducer;
