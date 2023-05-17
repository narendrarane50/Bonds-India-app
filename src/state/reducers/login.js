import { LOGIN } from '../../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { username, password } = action.payload;
      return {
        ...state,
        username,
        password,
      };

    default:
      return state;
  }
};

export default loginReducer;
