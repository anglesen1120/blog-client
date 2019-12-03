import {
  TOGGLE_SHOW_COMMENTS,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  CANCEL_COMMENT,
  OPEN_COMMENT_MODAL,
  CHANGE_COMMENT_EMAIL,
  CHANGE_COMMENT_BODY,
  CHANGE_COMMENT_NAME,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from "../actions/postDetailsAction";
import { LOAD_USER_DETAILS_DATA } from "../actions/userDetailsAction";

const initialState = {
  isShowModal: false,
  isShowComments: false,
  isLoading: false,
  comments: [],
  email: "",
  body: "",
  name: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS_DATA:
      return {
        ...state,
        comments: initialState.comments,
        isShowComments: initialState.isShowComments
      };
    case TOGGLE_SHOW_COMMENTS:
      return {
        ...state,
        isShowComments: !state.isShowComments
      };
    case GET_COMMENTS:
    case ADD_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload
      };
    case GET_COMMENTS_ERROR:
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CANCEL_COMMENT:
    case OPEN_COMMENT_MODAL:
      return {
        ...state,
        isShowModal: !state.isShowModal,
        email: initialState.email,
        body: initialState.body,
        name: initialState.name,
        error: initialState.error
      };
    case CHANGE_COMMENT_BODY:
    case CHANGE_COMMENT_EMAIL:
    case CHANGE_COMMENT_NAME:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        error: initialState.error
      };
    case ADD_COMMENT_SUCCESS:
      const [{ postId }] = state.comments.length
        ? state.comments
        : [{ postId: Math.random() }];
      const newComment = {
        postId,
        id: action.payload.id,
        name: state.name,
        email: state.email,
        body: state.body
      };

      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, newComment],
        name: initialState.name,
        email: initialState.email,
        body: initialState.body,
        isShowModal: false
      };

    default:
      return state;
  }
};
