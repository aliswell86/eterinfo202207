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
  currBox: Map(),
  boxResultList: List()
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
    const currBox = state.getIn(['boxs',Number(packageCode)]).toJS();
    const {itemInfo} = currBox;
    let currLuck = 0;

    const currBoxAddLuck = itemInfo.map((item) => {      
      const {luck} = item.luck;
      const currMin = currLuck + 1;
      currLuck += (luck * 100);
      const currMax = currLuck;
      
      return {
        ...item,
        luck: {
          luck: luck,
          min: String(currMin),
          max: String(currMax)
        }
      }
    });

    currBox.itemInfo = currBoxAddLuck;
    return state.set('currBox', fromJS(currBox)).set('boxResultList', new List());
  },
  [GET_BOXOPEN_RESLT]: (state, action) => {
    const {payload} = action;
    return state.set('boxResultList', state.toJS().boxResultList.concat(payload));
  }
}, initialState);