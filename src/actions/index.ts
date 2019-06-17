export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

export function userLogin(email: string, password: string) {
  return {
    type: USER_LOGIN,
    payload: {email, password}
  }
};

export function userLoginSuccess(user: Object) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user
  }
};

export function userLoginFailure(message: string) {
  return {
    type: USER_LOGIN_FAILURE,
    payload: message
  }
};

export function userLogout() {
  return {
    type: USER_LOGOUT
  }
};