import {
  LOAD_USERS_DATA,
  LOAD_USERS_DATA_SUCCESS,
  LOAD_USERS_DATA_ERROR
} from "../actions/homeAction";

const initialState = {
  isLoading: false,
  usersData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_DATA:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USERS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action.payload[0]
      };
    case LOAD_USERS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
