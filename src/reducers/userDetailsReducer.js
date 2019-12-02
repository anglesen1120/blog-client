import {
  LOAD_USER_DETAILS_DATA,
  LOAD_USER_DETAILS_DATA_SUCCESS,
  LOAD_USER_DETAILS_DATA_ERROR,
  REMOVE_POST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_ERROR,
  OPEN_POST_MODAL,
  CANCEL_POST,
  CHANGE_POST_BODY,
  CHANGE_POST_TITLE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR
} from "../actions/userDetailsAction";

const initialState = {
  isLoading: false,
  isShowModal: false,
  userDetailsData: [],
  title: "",
  body: "",
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS_DATA:
    case REMOVE_POST:
    case ADD_POST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USER_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetailsData: action.payload
      };
    case LOAD_USER_DETAILS_DATA_ERROR:
    case REMOVE_POST_ERROR:
    case ADD_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetailsData: state.userDetailsData.filter(
          userDetailData => userDetailData.id !== action.payload
        )
      };
    case OPEN_POST_MODAL:
    case CANCEL_POST:
      return {
        ...state,
        isShowModal: !state.isShowModal,
        body: initialState.body,
        title: initialState.title
      };
    case CHANGE_POST_TITLE:
    case CHANGE_POST_BODY:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case ADD_POST_SUCCESS:
      const [{ userId }] = state.userDetailsData;
      const newPost = {
        userId,
        id: action.payload.id,
        title: state.title,
        body: state.body
      };

      return {
        ...state,
        isLoading: false,
        userDetailsData: [...state.userDetailsData, newPost],
        title: initialState.title,
        body: initialState.body,
        isShowModal: false
      };
    default:
      return state;
  }
};
