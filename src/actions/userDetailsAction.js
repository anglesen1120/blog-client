export const LOAD_USER_DETAILS_DATA = "LOAD_USER_DETAILS_DATA";
export const LOAD_USER_DETAILS_DATA_SUCCESS = "LOAD_USER_DETAILS_DATA_SUCCESS";
export const LOAD_USER_DETAILS_DATA_ERROR = "LOAD_USER_DETAILS_DATA_ERROR";

export const BACK_TO_HOME = "BACK_TO_HOME";
export const OPEN_POST_MODAL = "OPEN_POST_MODAL";

export const CHANGE_POST_TITLE = "CHANGE_POST_TITLE";
export const CHANGE_POST_BODY = "CHANGE_POST_BODY";

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";
export const CANCEL_POST = "CANCEL_POST";

export const REMOVE_POST = "REMOVE_POST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_ERROR = "REMOVE_POST_ERROR";

export const loadUserDetailsDataAction = () => dispatch => {
  dispatch({
    type: LOAD_USER_DETAILS_DATA
  });
};

export const loadUserDetailsDataSuccessAction = userDetailsData => dispatch => {
  dispatch({
    type: LOAD_USER_DETAILS_DATA_SUCCESS,
    payload: userDetailsData
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

export const backToHomeAction = () => dispatch => {
  dispatch({
    type: BACK_TO_HOME
  });
};

export const openPostModalAction = () => dispatch => {
  dispatch({
    type: OPEN_POST_MODAL
  });
};

export const changePostTitleAction = title => dispatch => {
  dispatch({
    type: CHANGE_POST_TITLE,
    payload: {
      name: title.name,
      value: title.value
    }
  });
};

export const changePostBodyAction = body => dispatch => {
  dispatch({
    type: CHANGE_POST_BODY,
    payload: {
      name: body.name,
      value: body.value
    }
  });
};

export const addPostAction = () => dispatch => {
  dispatch({
    type: ADD_POST
  });
};

export const addPostSuccessAction = id => dispatch => {
  dispatch({
    type: ADD_POST_SUCCESS,
    payload: id
  });
};

export const addPostErrorAction = error => dispatch => {
  dispatch({
    type: ADD_POST_ERROR,
    payload: {
      error
    }
  });
};

export const cancelPostAction = () => dispatch => {
  dispatch({
    type: CANCEL_POST
  });
};

export const removePostAction = () => dispatch => {
  dispatch({
    type: REMOVE_POST
  });
};

export const removePostSuccessAction = id => dispatch => {
  dispatch({
    type: REMOVE_POST_SUCCESS,
    payload: id
  });
};

export const removePostErrorAction = error => dispatch => {
  dispatch({
    type: REMOVE_POST_ERROR,
    payload: error
  });
};
