import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_BOXLIST = 'boxsim/GET_BOXLIST';
const SET_CURRBOX = 'boxsim/SET_CURRBOX';
const GET_BOXOPEN_RESULT = 'boxsim/GET_BOXOPEN_RESULT';
const SET_BOXINFOLIST_DISPLAY = 'boxsim/SET_BOXINFOLIST_DISPLAY';
const INIT_BOXRESULTLIST = 'boxsim/INIT_BOXRESULTLIST';
const GET_BOXRESULTLIST_WHERE = 'boxsim/GET_BOXRESULTLIST_WHERE';

export const getBoxList = createAction(GET_BOXLIST, api.getBoxList);
export const setCurrBox = createAction(SET_CURRBOX);
export const getBoxOpenResult = createAction(GET_BOXOPEN_RESULT);
export const setBoxInfoListDisplay = createAction(SET_BOXINFOLIST_DISPLAY);
export const initialBoxResultList = createAction(INIT_BOXRESULTLIST);
export const getBoxResultListWhere = createAction(GET_BOXRESULTLIST_WHERE);

const initialState = Map({
  boxs: List(),
  currBox: Map(),
  boxResultList: List(),
  boxResultListWhere: List()
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
    return state.set('currBox', fromJS(currBox))
                .setIn(['currBox', 'grid'], 'none')
                .set('boxResultList', new List())
                .set('boxResultListWhere', new List());
  },
  [GET_BOXOPEN_RESULT]: (state, action) => {
    const {payload} = action;
    const sumList = state.toJS().boxResultList.concat(payload).map((item, cnt) => {
      return {
        ...item,
        resultSeq: cnt+1
      }
    });
    
    return state.set('boxResultList', sumList)
                .set('boxResultListWhere', sumList);
  },
  [SET_BOXINFOLIST_DISPLAY]: (state, action) => {
    const currDisp = state.getIn(['currBox', 'display']);
    return state.setIn(['currBox', 'display'], currDisp === 'grid' ? 'none' : 'grid');
  },
  [INIT_BOXRESULTLIST]: (state, action) => {
    return state.set('boxResultList', new List()).set('boxResultListWhere', new List());
  },
  [GET_BOXRESULTLIST_WHERE]: (state, action) => {
    const {payload} = action;
    const resultList = state.toJS().boxResultList;
    return state.set('boxResultListWhere', resultList.filter(result => result._id === payload));
  }
}, initialState);