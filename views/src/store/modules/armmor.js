import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_ARMMOR_LIST = 'armmor/GET_ARMMOR_LIST';
const SET_ARMMOR_WHERE = 'armmor/SET_ARMMOR_WHERE';
const GET_ARMMOR_WHERE_LIST = 'armmor/GET_ARMMOR_WHERE_LIST';

export const getArmmorList = createAction(GET_ARMMOR_LIST, api.getArmmorList);
export const setArmmorWhere = createAction(SET_ARMMOR_WHERE);
export const getArmmorWhereList = createAction(GET_ARMMOR_WHERE_LIST);

const initialState = Map({
  armmors: List(), // 모든방어구
  armmorWhere: Map({ // 선택한 조회조건들
    clyn: 'Y',
    stype2: '1',
    isType1: true,
    isType2: true,
    isType3: true,
    isType4: true,
    isType5: true,
    isType6: true,
    isType7: true,
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
    isTier11: false,
    isTier12: false,
    loading: true
  }),
  armmorWheres: List() // 선택한 조회조건에 해당된 방어구
});

export default handleActions({
  ...pender({
    type: GET_ARMMOR_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('armmors', fromJS(items))
                  .set('armmorWheres', items.filter(item => item.clyn === 'Y' && item.stype2 === '1'))
                  ;
    }
  }),
  [SET_ARMMOR_WHERE]: (state, action) => {
    const {name, value, checked} = action.payload;
    if(name === 'clyn' || name === 'stype2') {
      return state.setIn(['armmorWhere', name], value);
    }else{
      return state.setIn(['armmorWhere', name], checked);
    }
  },
  [GET_ARMMOR_WHERE_LIST]: (state, action) => {
    const {
      clyn, stype2, isType1, isType2, isType3, isType4, isType5, isType6, isType7,
      isTier1, isTier2, isTier3, isTier4, isTier5, isTier6, 
      isTier7, isTier8, isTier9, isTier10, isTier11, isTier12
    } = state.toJS().armmorWhere;

    const armmors = state.toJS().armmors.filter(armmor => 
      (
        (clyn === '' ? true : armmor.clyn === clyn) && (stype2 === '' ? true : armmor.stype2 === stype2)
      ) && (
        (!isType1 && !isType2 && !isType3 && !isType4 && !isType5 && !isType6 && !isType7) ? true : (
          armmor.stype1 === (isType1 ? '1' : '') ||
          armmor.stype1 === (isType2 ? '2' : '') ||
          armmor.stype1 === (isType3 ? '3' : '') ||
          armmor.stype1 === (isType4 ? '4' : '') ||
          armmor.stype1 === (isType5 ? '5' : '') ||
          armmor.stype1 === (isType6 ? '6' : '') ||
          armmor.stype1 === (isType7 ? '7' : '')
        )
      ) && (
        (!isTier1 && !isTier2 && !isTier3 && !isTier4 && !isTier5 && !isTier6 && 
        !isTier7 && !isTier8 && !isTier9 && !isTier10 && !isTier11 && !isTier12) ? true : (
          armmor.tier === (isTier1 ? 1 : 0) ||
          armmor.tier === (isTier2 ? 2 : 0) ||
          armmor.tier === (isTier3 ? 3 : 0) ||
          armmor.tier === (isTier4 ? 4 : 0) ||
          armmor.tier === (isTier5 ? 5 : 0) ||
          armmor.tier === (isTier6 ? 6 : 0) ||
          armmor.tier === (isTier7 ? 7 : 0) ||
          armmor.tier === (isTier8 ? 8 : 0) ||
          armmor.tier === (isTier9 ? 9 : 0) ||
          armmor.tier === (isTier10 ? 10 : 0) ||
          armmor.tier === (isTier11 ? 11 : 0) ||
          armmor.tier === (isTier12 ? 12 : 0)
        )
      )
    );

    return state.set('armmorWheres', armmors);
  }
}, initialState);