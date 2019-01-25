import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_ADPICK_LIST = 'common/GET_ADPICK_LIST';

export const getAdPickList = createAction(GET_ADPICK_LIST, api.getAdPickList);

const initialState = Map({
  adpickList: fromJS(
    [{
      a_href: '',
      img_src: '',
      name: ''
    }]
  )
});

export default handleActions({
  ...pender({
    type: GET_ADPICK_LIST,
    onSuccess: (state, action) => {
      const adpick = action.payload.data;
      // const random = Math.floor(Math.random() * adpick.length);
      return state.set('adpickList', fromJS(adpick));
    }
  })
}, initialState);