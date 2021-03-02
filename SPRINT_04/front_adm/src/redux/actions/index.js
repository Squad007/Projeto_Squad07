import * as actions from './actionTypes';

export const changeCredentials = (obj) => ({
  type: actions.CHANGE_CREDENTIALS,
  payload: {
    obj,
  },
});
