import { ADD_REGISTRATION_DETAILS, SET_REGISTRATION_SUCCESS, SET_REGISTRATION_ERROR } from '../../constants/actionTypes';

export const addRegistrationDetails = (details) => ({
  type: ADD_REGISTRATION_DETAILS,
  payload: details,
});

export const setRegistrationSuccess = (success) => ({
  type: SET_REGISTRATION_SUCCESS,
  payload: success,
});

export const setRegistrationError = (error) => ({
    type: SET_REGISTRATION_ERROR,
    payload: error,
  });