import * as actions from '../actions/actionTypes';

const initialState = {
  username: null,
  nome: null,
  imagem: null,
  email: null,
  token: null,
};

export default function credentials(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_CREDENTIALS:
      return action.payload.obj;

    default:
      return state;
  }
}
