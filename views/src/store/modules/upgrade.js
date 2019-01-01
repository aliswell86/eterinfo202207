import {createAction, handleActions} from 'redux-actions';
import {Map/*, List, fromJS*/} from 'immutable';
// import {pender} from 'redux-pender';
// import * as api from 'lib/api';

const SET_UPGRADE_TAX = 'upgrade/SET_UPGRADE_TAX';

export const setUpgradeTax = createAction(SET_UPGRADE_TAX);

const initialState = Map({
  upgradeInfo: Map({
    tax: '0' //-5% ~ 5%
  })
});

export default handleActions({
  [SET_UPGRADE_TAX]: (state, action) => {
    const {name, value} = action.payload;
    return state.setIn(['upgradeInfo', name], value);
  }
}, initialState);