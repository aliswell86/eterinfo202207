import {createAction, handleActions} from 'redux-actions';
import {Map/*, List*/, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
const NAVER_LOGIN = 'base/NAVER_LOGIN';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const naverLogin = createAction(NAVER_LOGIN, api.naverLogin);

const initialState = Map({
  modal: Map({
    remove: false,
    login: false
  })
});

export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const {payload: modalName} = action;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state, action) => {
    const {payload: modalName} = action;
    return state.setIn(['modal', modalName], false);
  },
  ...pender({
    type: NAVER_LOGIN,
    onSuccess: (state, action) => {  // 로그인 성공 시
      return state.set('logged', true);
    },
    onError: (state, action) => {  // 에러 발생 시
      return state.setIn(['loginModal', 'error'], true)
                  .setIn(['loginModal', 'password'], '');
    }
  })
}, initialState);