import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_PLUSUP_GRID = 'plusup/GET_PLUSUP_GRID';
const SET_PLUSUP_GRID_WHERE = 'plusup/SET_PLUSUP_GRID_WHERE';
const GET_PLUSUP_GRID_WHERE = 'plusup/GET_PLUSUP_GRID_WHERE';
const SET_PLUSUP_KIT = 'plusup/SET_PLUSUP_KIT';
const INITIAL_PLUSUP_SIMUL = 'plusup/INITIAL_PLUSUP_SIMUL';
const SET_PLUSUP_RESULT = 'plusup/SET_PLUSUP_RESULT';
const SET_PLUSUP_COMMENT = 'plusup/SET_PLUSUP_COMMENT';

export const getPlusUpGrid = createAction(GET_PLUSUP_GRID, api.getPlusUpGrid);
export const setPlusUpGridWhere = createAction(SET_PLUSUP_GRID_WHERE);
export const getPlusUpGridWhere = createAction(GET_PLUSUP_GRID_WHERE);
export const initialSimul = createAction(INITIAL_PLUSUP_SIMUL);
export const setPlusUpKit = createAction(SET_PLUSUP_KIT);
export const setPlusUpResult = createAction(SET_PLUSUP_RESULT);
export const setPlusUpComment = createAction(SET_PLUSUP_COMMENT); //미사용

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
    simulCurrPlusUp: '0',
    upTryCnt: '0',
    bestPlusUp: '0',
    plusUpLuck: List(),
    resultComment: ''
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
  [INITIAL_PLUSUP_SIMUL]: (state, action) => {
    const plusUpLuck = [
      {up: '1',  success: '21', fail: '79', failZero: '0'},
      {up: '2',  success: '20', fail: '65', failZero: '15'},
      {up: '3',  success: '19', fail: '65.2', failZero: '15.8'},
      {up: '4',  success: '18.1', fail: '65.3', failZero: '16.6'},
      {up: '5',  success: '17.2', fail: '65.4', failZero: '17.4'},
      {up: '6',  success: '16.3', fail: '65.4', failZero: '18.3'},
      {up: '7',  success: '15.5', fail: '65.3', failZero: '19.2'},
      {up: '8',  success: '14.7', fail: '65.1', failZero: '20.2'},
      {up: '9',  success: '14', fail: '64.8', failZero: '21.2'},
      {up: '10', success: '13.3', fail: '64.4', failZero: '22.3'},
      {up: '11', success: '12.6', fail: '64', failZero: '23.4'},
      {up: '12', success: '12', fail: '63.4', failZero: '24.6'},
      {up: '13', success: '11.4', fail: '62.8', failZero: '25.8'},
      {up: '14', success: '10.8', fail: '62.1', failZero: '27.1'},
      {up: '15', success: '10.3', fail: '61.2', failZero: '28.5'}
    ];

    const plusUpLuckByValue = plusUpLuck.map(luck => {
      const {success, fail} = luck;

      return {
        ...luck,
        luck: {
          success: String(Number(success) * 10),
          fail: String((Number(fail)*10) + (Number(success)*10)),
          failZero: '1000'
        }
      }
    });

    return state.setIn(['plusUpSimul', 'plusUpLuck'], fromJS(plusUpLuckByValue));
  },
  [SET_PLUSUP_KIT]: (state, action) => {
    const {payload: cnt} = action;

    if(cnt === '0') {
      return state.setIn(['plusUpSimul', 'usePlusUpKit'], '0')
                  .setIn(['plusUpSimul', 'usePlusUpKitF'], '0')
                  .setIn(['plusUpSimul', 'usePlusUpKitEp'], '0')
                  .setIn(['plusUpSimul', 'upTryCnt'], '0')
                  .setIn(['plusUpSimul', 'simulCurrPlusUp'], '0')
                  .setIn(['plusUpSimul', 'bestPlusUp'], '0')
                  .setIn(['plusUpSimul', 'resultComment'], '');
    }

    const upKit = Number(state.getIn(['plusUpSimul', 'usePlusUpKit'])) + Number(cnt);
    const upKitF = Number(state.getIn(['plusUpSimul', 'usePlusUpKitF'])) + Math.floor(Number(cnt) / 10);
    const upKitEp = Number(state.getIn(['plusUpSimul', 'usePlusUpKitEp'])) + (800 * Number(cnt))
    return state.setIn(['plusUpSimul', 'usePlusUpKit'], String(upKit))
                .setIn(['plusUpSimul', 'usePlusUpKitF'], String(upKitF))
                .setIn(['plusUpSimul', 'usePlusUpKitEp'], String(upKitEp));
  },
  [SET_PLUSUP_RESULT]: (state, action) => {
    const {
      upTryCntBefore, currPlusUpBefore, resultCommentBefore, usePlusUpKitBefore, usePlusUpKitFBefore, bestPlusUpBefore
    } = action.payload;
    
    return state.setIn(['plusUpSimul', 'upTryCnt'], String(upTryCntBefore))
                .setIn(['plusUpSimul', 'simulCurrPlusUp'], String(currPlusUpBefore))
                .setIn(['plusUpSimul', 'resultComment'], resultCommentBefore)
                .setIn(['plusUpSimul', 'usePlusUpKit'], String(usePlusUpKitBefore))
                .setIn(['plusUpSimul', 'usePlusUpKitF'], String(usePlusUpKitFBefore))
                .setIn(['plusUpSimul', 'bestPlusUp'], String(bestPlusUpBefore));
  },
  [SET_PLUSUP_COMMENT]: (state, action) => {
    return state.setIn(['plusUpSimul', 'resultComment'], '');
  }
}, initialState); 