import {
  LOAD_USER_DETAILS_DATA,
  LOAD_USER_DETAILS_DATA_SUCCESS,
  LOAD_USER_DETAILS_DATA_ERROR,
  REMOVE_POST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_ERROR
} from "../actions/userDetailsAction";

const initialState = {
  isLoading: false,
  userDetailsData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS_DATA || REMOVE_POST:
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
    case LOAD_USER_DETAILS_DATA_ERROR || REMOVE_POST_ERROR:
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
    default:
      return state;
  }
};
