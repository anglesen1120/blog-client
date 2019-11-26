export const LOAD_USERS_DATA = "LOAD_USERS_DATA";
export const LOAD_USERS_DATA_SUCCESS = "LOAD_USERS_DATA_SUCCESS";
export const LOAD_USERS_DATA_ERROR = "LOAD_USERS_DATA_ERROR";

export const loadUsersDataAction = () => dispatch => {
  dispatch({
    type: LOAD_USERS_DATA
  });
};

export const loadUsersDataSuccessAction = usersData => dispatch => {
  dispatch({
    type: LOAD_USERS_DATA_SUCCESS,
    payload: [usersData]
  });
};

export const loadUsersDataErrorAction = error => dispatch => {
  dispatch({
    type: LOAD_USERS_DATA_ERROR,
    payload: {
      error
    }
  });
};
