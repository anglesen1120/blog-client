export const LOAD_USER_DETAILS_DATA = "LOAD_USER_DETAILS_DATA";
export const LOAD_USER_DETAILS_DATA_SUCCESS = "LOAD_USER_DETAILS_DATA_SUCCESS";
export const LOAD_USER_DETAILS_DATA_ERROR = "LOAD_USER_DETAILS_DATA_ERROR";

export const BACK_TO_HOME = "BACK_TO_HOME";
export const OPEN_POST_MODAL = "OPEN_POST_MODAL";

export const CHANGE_POST_TITLE = "CHANGE_POST_TITLE";
export const CHANGE_POST_BODY = "CHANGE_POST_BODY";

export const SAVE_POST = "SAVE_POST";
export const SAVE_POST_SUCCESS = "SAVE_POST_SUCCESS";
export const SAVE_POST_ERROR = "SAVE_POST_ERROR";
export const CANCEL_POST = "CANCEL_POST";

export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const SHOW_COMMENTS = "SHOW_COMMENTS";
export const HIDE_COMMENTS = "HIDE_COMMENTS";
export const ADD_COMMENT_MODAL = "ADD_COMMENT_MODAL";

export const CHANGE_COMMENT_NAME = "CHANGE_COMMENT_NAME";
export const CHANGE_COMMENT_EMAIL = "CHANGE_COMMENT_EMAIL";
export const CHANGE_COMMENT_BODY = "CHANGE_COMMENT_BODY";

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
export const CANCEL_COMMENT = "CANCEL_COMMENT";

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

export const changePostTitleAction = postTitle => dispatch => {
  dispatch({
    type: CHANGE_POST_TITLE,
    payload: {
      postTitle
    }
  });
};

export const changePostBodyAction = postBody => dispatch => {
  dispatch({
    type: CHANGE_POST_BODY,
    payload: {
      postBody
    }
  });
};

export const savePostAction = () => dispatch => {
  dispatch({
    type: SAVE_POST
  });
};

export const savePostSuccessAction = () => dispatch => {
  dispatch({
    type: SAVE_POST_SUCCESS
  });
};

export const savePostErrorAction = error => dispatch => {
  dispatch({
    type: SAVE_POST_ERROR,
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

export const getPostAction = () => dispatch => {
  dispatch({
    type: GET_POST
  });
};

export const getPostSuccessAction = post => dispatch => {
  dispatch({
    type: GET_POST_SUCCESS,
    payload: {
      ...post
    }
  });
};

export const getPostErrorAction = error => dispatch => {
  dispatch({
    type: GET_POST_ERROR,
    payload: {
      error
    }
  });
};

export const showCommentsAction = () => dispatch => {
  dispatch({
    type: SHOW_COMMENTS
  });
};

export const hideCommentsAction = () => dispatch => {
  dispatch({
    type: HIDE_COMMENTS
  });
};

export const addCommentModalAction = () => dispatch => {
  dispatch({
    type: ADD_COMMENT_MODAL
  });
};

export const changeCommentNameAction = commentName => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_NAME,
    payload: {
      commentName
    }
  });
};

export const changeCommentEmailAction = commentEmail => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_EMAIL,
    payload: {
      commentEmail
    }
  });
};

export const changeCommentBodyAction = commentBody => dispatch => {
  dispatch({
    type: CHANGE_COMMENT_BODY,
    payload: {
      commentBody
    }
  });
};

export const addCommentAction = () => dispatch => {
  dispatch({
    type: ADD_COMMENT
  });
};

export const addCommentSuccessAction = () => dispatch => {
  dispatch({
    type: ADD_COMMENT_SUCCESS
  });
};

export const addCommentErrorAction = error => dispatch => {
  dispatch({
    type: ADD_COMMENT_ERROR,
    payload: {
      error
    }
  });
};

export const cancelCommentAction = () => dispatch => {
  dispatch({
    type: CANCEL_COMMENT
  });
};
