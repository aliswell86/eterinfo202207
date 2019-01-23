import {/*createAction, */handleActions} from 'redux-actions';
import { fromJS, Map } from 'immutable';

// const GET_WEAPONTYPE_MAPPING = 'common/GET_WEAPONTYPE_MAPPING';

const initialState = Map({
  weaponMapping: fromJS([
    {
      seq: '1',
      apiName: '도검',
      appName: 'sword'
    },
    {
      seq: '2',
      apiName: '둔기',
      appName: 'hammer'
    },
    {
      seq: '3',
      apiName: '도끼',
      appName: 'axe'
    },
    {
      seq: '4',
      apiName: '돌격소총',
      appName: 'assaultRifle'
    },
    {
      seq: '5',
      apiName: '기관총',
      appName: 'machineGun'
    }
  ]),
  refScrollDiv: Map()
});

export default handleActions({
  
}, initialState);