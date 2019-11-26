export const LOAD_USER_DETAILS_DATA = "LOAD_USER_DETAILS_DATA";
export const LOAD_USER_DETAILS_DATA_SUCCESS = "LOAD_USER_DETAILS_DATA_SUCCESS";
export const LOAD_USER_DETAILS_DATA_ERROR = "LOAD_USER_DETAILS_DATA_ERROR";

export const loadUserDetailsDataAction = () => dispatch => {
  dispatch({
    type: LOAD_USER_DETAILS_DATA
  });
};

export const loadUserDetailsDataSuccessAction = userDetails => dispatch => {
  dispatch({
    type: LOAD_USER_DETAILS_DATA_SUCCESS,
    payload: {
      ...userDetails
    }
  });
};

export const loadUserDetailsDataErrorAction = error => dispatch => {
  dispatch({
    type: LOAD_USER_DETAILS_DATA_ERROR,
    payload: {
      error
    }
  });
};
