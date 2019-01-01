import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_BOXLIST = 'boxsim/GET_BOXLIST';
const SET_CURRBOX = 'boxsim/SET_CURRBOX';
const GET_BOXOPEN_RESLT = 'boxsim/GET_BOXOPEN_RESLT';

export const getBoxList = createAction(GET_BOXLIST, api.getBoxList);
export const setCurrBox = createAction(SET_CURRBOX);
export const getBoxOpenResult = createAction(GET_BOXOPEN_RESLT);

const initialState = Map({
  boxs: List(),
  currBox: Map()
});

export default handleActions({
  ...pender({
    type: GET_BOXLIST,
    onSuccess: (state, action) => {
      const {data: boxs} = action.payload;
      return state.set('boxs', fromJS(boxs));
    }
  }),
  [SET_CURRBOX]: (state, action) => {
    const {payload: packageCode} = action;
    return state.set('currBox', state.getIn(['boxs',Number(packageCode)]));
  },
  [GET_BOXOPEN_RESLT]: (state, action) => {
    const {payload: boxCnt} = action;
    console.log("boxCnt : " + boxCnt);
    return state;
  }
}, initialState);