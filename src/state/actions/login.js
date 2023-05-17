import { LOGIN } from '../../constants/actionTypes';

export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: { username, password },
  };
};