export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

export const TOGGLE_SHOW_COMMENTS = "TOGGLE_SHOW_COMMENTS";
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL";

export const CHANGE_COMMENT_NAME = "CHANGE_COMMENT_NAME";
export const CHANGE_COMMENT_EMAIL = "CHANGE_COMMENT_EMAIL";
export const CHANGE_COMMENT_BODY = "CHANGE_COMMENT_BODY";

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
export const CANCEL_COMMENT = "CANCEL_COMMENT";

export const getCommentsAction = () => dispatch => {
  dispatch({
    type: GET_COMMENTS
  });
};

export const getCommentsSuccessAction = comments => dispatch => {
  dispatch({
    type: GET_COMMENTS_SUCCESS,
    payload: comments
  });
};

export const getCommentsErrorAction = error => dispatch => {
  dispatch({
    type: GET_COMMENTS_ERROR,
    payload: error
  });
};

export const toggleShowCommentsAction = () => dispatch => {
  dispatch({
    type: TOGGLE_SHOW_COMMENTS
  });
};

export const openCommentModalAction = () => dispatch => {
  dispatch({
    type: OPEN_COMMENT_MODAL
  });
};

export const changeCommentNameAction = name => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_NAME,
    payload: {
      name: name.name,
      value: name.value
    }
  });
};

export const changeCommentEmailAction = email => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_EMAIL,
    payload: {
      name: email.name,
      value: email.value
    }
  });
};

export const changeCommentBodyAction = body => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_BODY,
    payload: {
      name: body.name,
      value: body.value
    }
  });
};

export const addCommentAction = () => dispatch => {
  dispatch({
    type: ADD_COMMENT
  });
};

export const addCommentSuccessAction = id => dispatch => {
  dispatch({
    type: ADD_COMMENT_SUCCESS,
    payload: id
  });
};

export const addCommentErrorAction = error => dispatch => {
  dispatch({
    type: ADD_COMMENT_ERROR,
    payload: error
  });
};

export const cancelCommentAction = () => dispatch => {
  dispatch({
    type: CANCEL_COMMENT
  });
};
