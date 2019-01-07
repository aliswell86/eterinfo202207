import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_PLUSUP_GRID = 'plusup/GET_PLUSUP_GRID';
const SET_PLUSUP_GRID_WHERE = 'plusup/SET_PLUSUP_GRID_WHERE';
const GET_PLUSUP_GRID_WHERE = 'plusup/GET_PLUSUP_GRID_WHERE';
const SET_PLUSUP_KIT = 'plusup/SET_PLUSUP_KIT';

export const getPlusUpGrid = createAction(GET_PLUSUP_GRID, api.getPlusUpGrid);
export const setPlusUpGridWhere = createAction(SET_PLUSUP_GRID_WHERE);
export const getPlusUpGridWhere = createAction(GET_PLUSUP_GRID_WHERE);
export const setPlusUpKit = createAction(SET_PLUSUP_KIT);

const initialState = Map({
  plusUpGrid: List(),
  currPlusUp: Map({
    plusUpGridWhere: List(),
    armmorDv: '0',
    gradeDv: '0',
    tierDv: '0'
  }),
  plusUpSimul: Map({
    usePlusUpKit: '0',
    usePlusUpKitF: '0',
    usePlusUpKitEp: '0',
    currPlusUp: '0',
    plusUpLuck: List(
      Map({
        up: '1',
        sucess: '21',
        fail: '65',
        superFail: '0'
      }),
      Map({
        up: '1',
        sucess: '21',
        fail: '65',
        superFail: '0'
      })
    )
  })
});

export default handleActions({
  ...pender({
    type: GET_PLUSUP_GRID,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('plusUpGrid', fromJS(items))
                  .setIn(['currPlusUp', 'plusUpGridWhere'], items[0][0][0]);
    }
  }),
  [SET_PLUSUP_GRID_WHERE]: (state, action) => {
    const {name, value} = action.payload;
    return state.setIn(['currPlusUp', name], value);
  },
  [GET_PLUSUP_GRID_WHERE]: (state, action) => {
    const {armmorDv, gradeDv, tierDv} = state.toJS().currPlusUp;
    return state.setIn(['currPlusUp', 'plusUpGridWhere'], 
      state.toJS().plusUpGrid[armmorDv][gradeDv][tierDv]);
  },
  [SET_PLUSUP_KIT]: (state, action) => {
    const {payload: cnt} = action;

    if(cnt === '0') {
      return state.setIn(['plusUpSimul', 'usePlusUpKit'], '0')
                  .setIn(['plusUpSimul', 'usePlusUpKitF'], '0')
                  .setIn(['plusUpSimul', 'usePlusUpKitEp'], '0');
    }

    const upKit = Number(state.getIn(['plusUpSimul', 'usePlusUpKit'])) + Number(cnt);
    const upKitF = Number(state.getIn(['plusUpSimul', 'usePlusUpKitF'])) + Math.floor(Number(cnt) / 10);
    const upKitEp = Number(state.getIn(['plusUpSimul', 'usePlusUpKitEp'])) + (800 * Number(cnt))
    return state.setIn(['plusUpSimul', 'usePlusUpKit'], String(upKit))
                .setIn(['plusUpSimul', 'usePlusUpKitF'], String(upKitF))
                .setIn(['plusUpSimul', 'usePlusUpKitEp'], String(upKitEp));
  }
}, initialState); 