import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_BOXLIST = 'boxsim/GET_BOXLIST';
const SET_CURRBOX = 'boxsim/SET_CURRBOX';
const GET_BOXOPEN_RESLT = 'boxsim/GET_BOXOPEN_RESLT';

export const getBoxList = createAction(GET_BOXLIST, api.getBoxList);
export const setCurrBox = createAction(SET_CURRBOX);
export const getBoxOpenResult = createAction(GET_BOXOPEN_RESLT);

const initialState = Map({
  boxs: List(),
  currBox: Map()
});

export default handleActions({
  ...pender({
    type: GET_BOXLIST,
    onSuccess: (state, action) => {
      const {data: boxs} = action.payload;
      return state.set('boxs', fromJS(boxs));
    }
  }),
  [SET_CURRBOX]: (state, action) => {
    const {payload: packageCode} = action;
    const currBox = state.getIn(['boxs',Number(packageCode)]).toJS();
    const {itemInfo} = currBox;
    
    itemInfo.reduce((acc, cur, cnt, item) => {
      acc += cur;
      console.log(acc);
      // return {
      //   ...item,
      //   luck: {
      //     luck: luck,
      //     min: acc
      //   }
      // }
    });


    // const currBoxAddLuck = itemInfo.map((item, cnt, itemInfo) => {      
    //   const luck = Number(item.luck);
    //   const currMin = cnt === 0 ? 1 : Number(itemInfo[cnt - 1].luck) * 100 + 1;
    //   const currMax = cnt === 0 ? luck * 100 : luck * 100 + (Number(itemInfo[cnt].luck) * 100);
      
    //   return {
    //     ...item,
    //     luck: {
    //       luck: luck,
    //       min: String(currMin),
    //       max: String(currMax)
    //     }
    //   }
    // });
    // console.log(currBoxAddLuck);

    return state.set('currBox', state.getIn(['boxs',Number(packageCode)]));
  },
  [GET_BOXOPEN_RESLT]: (state, action) => {
    const {payload: boxCnt} = action;
    console.log("boxCnt : " + boxCnt);
    return state;
  }
}, initialState);