import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_COSTUME_LIST = 'accessory/GET_COSTUME_LIST';
const SET_COSTUME_WHERE = 'accessory/SET_COSTUME_WHERE';
const GET_COSTUME_WHERE_LIST = 'accessory/GET_COSTUME_WHERE_LIST';

export const getAccessoryList = createAction(GET_COSTUME_LIST, api.getAccessoryList);
export const setAccessoryWhere = createAction(SET_COSTUME_WHERE);
export const getAccessoryWhereList = createAction(GET_COSTUME_WHERE_LIST);

const initialState = Map({
  accessorys: List(), // 모든방어구
  accessoryWhere: Map({ // 선택한 조회조건들
    isCtype5: true,
    isCtype6: false,
    isCtype7: false,
    isCtype8: false,
    isCtype9: false,
    isCtype10: false,
    isCtype11: false,
    isCtype12: false,
    loading: true
  }),
  accessoryWheres: List() // 선택한 조회조건에 해당된 악세
});

export default handleActions({
  ...pender({
    type: GET_COSTUME_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('accessorys', fromJS(items))
                  .set('accessoryWheres', items.filter(item => item.ctype === '5'))
                  ;
    }
  }),
  [SET_COSTUME_WHERE]: (state, action) => {
    const {name, checked} = action.payload;
    return state.setIn(['accessoryWhere', name], checked);
  },
  [GET_COSTUME_WHERE_LIST]: (state, action) => {
    const {
      isCtype5, isCtype6, isCtype7, isCtype8, isCtype9, isCtype10, isCtype11, isCtype12
    } = state.toJS().accessoryWhere;

    const accessorys = state.toJS().accessorys.filter(accessory => 
      (
        (!isCtype5 && !isCtype6 && !isCtype7 && !isCtype8 && !isCtype9 && !isCtype10 && !isCtype11 && !isCtype12) ? true : (
          accessory.ctype === (isCtype5 ? '5' : '') ||
          accessory.ctype === (isCtype6 ? '6' : '') ||
          accessory.ctype === (isCtype7 ? '7' : '') ||
          accessory.ctype === (isCtype8 ? '8' : '') ||
          accessory.ctype === (isCtype9 ? '9' : '') ||
          accessory.ctype === (isCtype10 ? '10' : '') ||
          accessory.ctype === (isCtype11 ? '11' : '') ||
          accessory.ctype === (isCtype12 ? '12' : '')
        ) 
      )
    );

    return state.set('accessoryWheres', accessorys);
  }
}, initialState);