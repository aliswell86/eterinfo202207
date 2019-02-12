import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_ARMMOR_LIST = 'armmor/GET_ARMMOR_LIST';

export const getArmmorList = createAction(GET_ARMMOR_LIST, api.getArmmorList);

const initialState = Map({
  armmors: List(), // 모든방어구
});

export default handleActions({
  ...pender({
    type: GET_ARMMOR_LIST,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      return state.set('armmors', fromJS(items))
                  // .set('weaponWheres', items.filter(item => item.clyn === 'Y'))
                  ;
    }
  })
}, initialState);