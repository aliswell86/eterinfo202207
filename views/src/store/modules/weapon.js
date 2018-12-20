import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const SET_WEAPON_WHERE = 'weapon/SET_WEAPON_WHERE';
const GET_WEAPON_LIST = 'weapon/GET_WEAPON_LIST';
const GET_WEAPON_WHERE_LIST = 'weapon/GET_WEAPON_WHERE_LIST';

export const setWeaponWhere = createAction(SET_WEAPON_WHERE);
export const getWeaponList = createAction(GET_WEAPON_LIST, api.getWeaponList);
export const getWeaponWhereList = createAction(GET_WEAPON_WHERE_LIST);

const initialState = Map({
  weaponWhere: Map({
    clyn: '',
    illegal: '',
    isType1: false,
    isType2: false,
    isType3: false,
    isType4: false,
    isType5: false,
    isType6: false,
    isType7: false,
    isType8: false,
    isType9: false,
    isType10: false,
    isType11: false,
    isType12: false,
    isType13: false,
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
  weapons: List(),
  weaponWheres: List()
});

export default handleActions({
  ...pender({
    type: GET_WEAPON_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('weapons', fromJS(items));
    }
  }),
  [SET_WEAPON_WHERE]: (state, action) => {
    const {name, value, checked} = action.payload;
    if(name === 'clyn' || name === 'illegal') {
      return state.setIn(['weaponWhere', name], value);
    }else{
      return state.setIn(['weaponWhere', name], checked);
    }
  },
  [GET_WEAPON_WHERE_LIST]: (state, action) => {
    const {
      clyn, illegal,
      isType1, isType2, isType3, isType4, isType5, isType6, isType7,
      isType8, isType9,isType10, isType11, isType12, isType13,
      isTier1, isTier2, isTier3, isTier4, isTier5, isTier6, 
      isTier7, isTier8, isTier9, isTier10, isTier11, isTier12
    } = state.toJS().weaponWhere;

    const weapons = state.toJS().weapons.filter(weapon => 
      (
        (clyn === '' ? true : weapon.clyn === clyn) && (illegal === '' ? true : weapon.illegal === illegal)
      ) && (
        (!isType1 && !isType2 && !isType3 && !isType4 && !isType5 && !isType6 && !isType7 && 
        !isType8 && !isType9 && !isType10 && !isType11 && !isType12 && !isType13) ? true : (
          weapon.item_dtl_dv === (isType1 ? '저격소총' : '') ||
          weapon.item_dtl_dv === (isType2 ? '돌격소총' : '') ||
          weapon.item_dtl_dv === (isType3 ? '기관총' : '') ||
          weapon.item_dtl_dv === (isType4 ? '중화기' : '') ||
          weapon.item_dtl_dv === (isType5 ? '지원화기' : '') ||
          weapon.item_dtl_dv === (isType6 ? '샷건' : '') ||
          weapon.item_dtl_dv === (isType7 ? '권총' : '') ||
          weapon.item_dtl_dv === (isType8 ? '특수화기' : '') ||
          weapon.item_dtl_dv === (isType9 ? '도검' : '') ||
          weapon.item_dtl_dv === (isType10 ? '둔기' : '') ||
          weapon.item_dtl_dv === (isType11 ? '도끼' : '') ||
          weapon.item_dtl_dv === (isType12 ? '장창' : '') ||
          weapon.item_dtl_dv === (isType13 ? '미늘창' : '')
        )
      ) && (
        (!isTier1 && !isTier2 && !isTier3 && !isTier4 && !isTier5 && !isTier6 && 
        !isTier7 && !isTier8 && !isTier9 && !isTier10 && !isTier11 && !isTier12) ? true : (
          weapon.tier === (isTier1 ? 1 : 0) ||
          weapon.tier === (isTier2 ? 2 : 0) ||
          weapon.tier === (isTier3 ? 3 : 0) ||
          weapon.tier === (isTier4 ? 4 : 0) ||
          weapon.tier === (isTier5 ? 5 : 0) ||
          weapon.tier === (isTier6 ? 6 : 0) ||
          weapon.tier === (isTier7 ? 7 : 0) ||
          weapon.tier === (isTier8 ? 8 : 0) ||
          weapon.tier === (isTier9 ? 9 : 0) ||
          weapon.tier === (isTier10 ? 10 : 0) ||
          weapon.tier === (isTier11 ? 11 : 0) ||
          weapon.tier === (isTier12 ? 12 : 0)
        )
      )
    );

    return state.set('weaponWheres', weapons);

    // const weapons2 = state.toJS().weapons.filter(weapon => weapon.illegal === (isIllegal ? 'Y' : ''));
    // const weapons = weapons1.concat(weapons2);
    // return state.set('weaponWheres', Object.values(weapons.reduce((acc,cur)=>Object.assign(acc,{[cur._id]:cur}),{})));
  }
}, initialState);