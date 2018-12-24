import {createAction, handleActions} from 'redux-actions';
import {Map/*, List, fromJS*/} from 'immutable';
// import {pender} from 'redux-pender';
// import * as api from 'lib/api';

const SET_MYSPEC_STAT = 'weapon/SET_MYSPEC_STAT';

export const setMyStat = createAction(SET_MYSPEC_STAT);

const initialState = Map({
  myStat: Map({
    mainStat: '5',
    itemDmgUp: '0',
    limitDmg: '0'
  })
});

export default handleActions({
  [SET_MYSPEC_STAT]: (state, action) => {
    const {name, value} = action.payload;
    return state.setIn(['myStat', name], value);
  }
}, initialState);