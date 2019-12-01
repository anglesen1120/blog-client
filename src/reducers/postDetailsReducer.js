import {
  TOGGLE_SHOW_COMMENTS,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  CANCEL_COMMENT,
  OPEN_COMMENT_MODAL
} from "../actions/postDetailsAction";

const initialState = {
  isShowModal: false,
  isShowComments: false,
  isLoading: false,
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_COMMENTS:
      return {
        ...state,
        isShowComments: !state.isShowComments
      };
    case GET_COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload[0]
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CANCEL_COMMENT:
    case OPEN_COMMENT_MODAL:
      return {
        ...state,
        isShowModal: !state.isShowModal
      };

    default:
      return state;
  }
};
