import {
    SET_NAME,
    SET_USERNAME,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD,
    SET_REGISTRATION_SUCCESS,
  } from '../../constants/actionTypes';
  
  export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
  });
  
  export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username,
  });
  
  export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password,
  });
  
  export const setConfirmPassword = (confirmPassword) => ({
    type: SET_CONFIRM_PASSWORD,
    payload: confirmPassword,
  });
  
  export const setRegistrationSuccess = (success) => ({
    type: SET_REGISTRATION_SUCCESS,
    payload: success,
  });
  