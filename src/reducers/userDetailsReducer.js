import {
  LOAD_USER_DETAILS_DATA,
  LOAD_USER_DETAILS_DATA_SUCCESS,
  LOAD_USER_DETAILS_DATA_ERROR,
  REMOVE_POST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_ERROR,
  OPEN_POST_MODAL,
  CANCEL_POST
} from "../actions/userDetailsAction";

const initialState = {
  isLoading: false,
  isShowModal: false,
  userDetailsData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS_DATA:
    case REMOVE_POST:
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
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
        isShowModal: !state.isShowModal
      };

    default:
      return state;
  }
};
