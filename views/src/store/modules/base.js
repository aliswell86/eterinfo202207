import {createAction, handleActions} from 'redux-actions';
import {Map/*, List*/, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
const SHOW_NAVER_LOGIN = 'base/SHOW_NAVER_LOGIN';
const CHECK_LOGIN ='base/CHECK_LOGIN';
const TEMP_LOGIN = 'base/TEMP_LOGIN';
const LOGOUT = 'base/LOGOUT';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const showNaverLogin = createAction(SHOW_NAVER_LOGIN, api.naverLogin);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const tempLogin = createAction(TEMP_LOGIN);
export const logout = createAction(LOGOUT, api.logout);

const initialState = Map({
  modal: Map({
    remove: false,
    login: Map({
      visible: false,
      href: ''
    })
  }),
  logged: false,
  stateKey: '',
  profileId : ''
});

export default handleActions({
  ...pender({
    type: SHOW_NAVER_LOGIN,
    onSuccess: (state, action) => {  // 로그인 성공 시
      const {data} = action.payload;
      return state.setIn(['modal', 'login', 'visible'], true)
                  .setIn(['modal', 'login', 'href'], data);
    },
    onError: (state, action) => {  // 에러 발생 시
      const {payload: modalName} = action;
      return state.setIn(['modal', modalName], false);
    }
  }),
  ...pender({
    type: CHECK_LOGIN,
    onSuccess: (state, action) => {
      const { logged, stateKey, profileId } = action.payload.data;
      
      return state.set('logged', logged)
                  .set('stateKey', stateKey)
                  .set('profileId', profileId);
    }
  }),
  [HIDE_MODAL]: (state, action) => {
    const {payload: modalName} = action;
    return state.setIn(['modal', modalName, 'visible'], false);
  },
  [TEMP_LOGIN]: (state, action) => {
    return state.set('logged', true);
  },
}, initialState);