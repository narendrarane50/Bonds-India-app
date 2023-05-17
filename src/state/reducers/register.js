import {
    SET_NAME,
    SET_USERNAME,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD,
    SET_REGISTRATION_SUCCESS,
  } from '../../constants/actionTypes';
  
  const initialState = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    registrationSuccess: false,
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NAME:
        return {
          ...state,
          name: action.payload,
        };
      case SET_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
      case SET_PASSWORD:
        return {
          ...state,
          password: action.payload,
        };
      case SET_CONFIRM_PASSWORD:
        return {
          ...state,
          confirmPassword: action.payload,
        };
      case SET_REGISTRATION_SUCCESS:
        return {
          ...state,
          registrationSuccess: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  