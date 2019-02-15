import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_COSTUME_LIST = 'costume/GET_COSTUME_LIST';
const SET_COSTUME_WHERE = 'costume/SET_COSTUME_WHERE';
const GET_COSTUME_WHERE_LIST = 'costume/GET_COSTUME_WHERE_LIST';

export const getCostumeList = createAction(GET_COSTUME_LIST, api.getCostumeList);
export const setCostumeWhere = createAction(SET_COSTUME_WHERE);
export const getCostumeWhereList = createAction(GET_COSTUME_WHERE_LIST);

const initialState = Map({
  costumes: List(), // 모든방어구
  costumeWhere: Map({ // 선택한 조회조건들
    isCtype3: true,
    isCtype4: false,
    isStype21: true,
    isStype22: false,
    isTier1: false,
    isTier2: false,
    isTier3: false,
    isTier4: false,
    isTier5: false,
    isTier6: false,
    isTier7: false,
    isTier8: false,
    isTier9: false,
    isTier10: false,
    loading: true
  }),
  costumeWheres: List() // 선택한 조회조건에 해당된 코튬날개
});

export default handleActions({
  ...pender({
    type: GET_COSTUME_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('costumes', fromJS(items))
                  .set('costumeWheres', items.filter(item => item.ctype === '3' && item.stype2 === '1'))
                  ;
    }
  }),
  [SET_COSTUME_WHERE]: (state, action) => {
    const {name, checked} = action.payload;
    return state.setIn(['costumeWhere', name], checked);
  },
  [GET_COSTUME_WHERE_LIST]: (state, action) => {
    const {
      isCtype3, isCtype4, isStype21, isStype22,
      isTier1, isTier2, isTier3, isTier4, isTier5, isTier6, 
      isTier7, isTier8, isTier9, isTier10
    } = state.toJS().costumeWhere;

    const costumes = state.toJS().costumes.filter(costume => 
      (
        (!isCtype3 && !isCtype4) ? true : (
          costume.ctype === (isCtype3 ? '3' : '') ||
          costume.ctype === (isCtype4 ? '4' : '')
        ) 
      ) && (
        (!isStype21 && !isStype22) ? true : (
          costume.stype2 === (isStype21 ? '1' : '') ||
          costume.stype2 === (isStype22 ? '2' : '')
        )
      ) && (
        (!isTier1 && !isTier2 && !isTier3 && !isTier4 && !isTier5 && !isTier6 && 
        !isTier7 && !isTier8 && !isTier9 && !isTier10) ? true : (
          costume.tier === (isTier1 ? 1 : 0) ||
          costume.tier === (isTier2 ? 2 : 0) ||
          costume.tier === (isTier3 ? 3 : 0) ||
          costume.tier === (isTier4 ? 4 : 0) ||
          costume.tier === (isTier5 ? 5 : 0) ||
          costume.tier === (isTier6 ? 6 : 0) ||
          costume.tier === (isTier7 ? 7 : 0) ||
          costume.tier === (isTier8 ? 8 : 0) ||
          costume.tier === (isTier9 ? 9 : 0) ||
          costume.tier === (isTier10 ? 10 : 0)
        )
      )
    );

    return state.set('costumeWheres', costumes);
  }
}, initialState);