// import {
//     SET_NAME,
//     SET_USERNAME,
//     SET_PASSWORD,
//     SET_CONFIRM_PASSWORD,
//     SET_REGISTRATION_SUCCESS,
//   } from '../../constants/actionTypes';
  
//   const initialState = {
//     name: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     registrationSuccess: false,
//   };
  
//   const registrationReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SET_NAME:
//         return {
//           ...state,
//           name: action.payload,
//         };
//       case SET_USERNAME:
//         return {
//           ...state,
//           username: action.payload,
//         };
//       case SET_PASSWORD:
//         return {
//           ...state,
//           password: action.payload,
//         };
//       case SET_CONFIRM_PASSWORD:
//         return {
//           ...state,
//           confirmPassword: action.payload,
//         };
//       case SET_REGISTRATION_SUCCESS:
//         return {
//           ...state,
//           registrationSuccess: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default registrationReducer;

import {
    ADD_REGISTRATION_DETAILS,
    SET_REGISTRATION_SUCCESS,
    SET_REGISTRATION_ERROR,
  } from '../../constants/actionTypes';
  
const initialState = {
    registrationDetails: [],
    registrationSuccess: false,
    registrationError: '',
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_REGISTRATION_DETAILS:
        const existingUser = state.registrationDetails.find(
          (detail) => detail.username === action.payload.username
        );
  
        if (existingUser) {
          return {
            ...state,
            registrationError: 'Username already exists. Please choose a different username.',
          };
        }
  
        return {
          ...state,
          registrationDetails: [...state.registrationDetails, action.payload],
          registrationError: '',
        };
      case SET_REGISTRATION_SUCCESS:
        return {
          ...state,
          registrationSuccess: action.payload,
        };
      case SET_REGISTRATION_ERROR:
        return {
          ...state,
          registrationError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default registrationReducer;