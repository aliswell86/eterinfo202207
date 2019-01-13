import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_BOXLIST = 'boxsim/GET_BOXLIST';
const SET_CURRBOX = 'boxsim/SET_CURRBOX';
const GET_BOXOPEN_RESULT = 'boxsim/GET_BOXOPEN_RESULT';
const SET_BOXINFOLIST_DISPLAY = 'boxsim/SET_BOXINFOLIST_DISPLAY';
const INIT_BOXRESULTLIST = 'boxsim/INIT_BOXRESULTLIST';
const GET_BOXRESULTLIST_WHERE = 'boxsim/GET_BOXRESULTLIST_WHERE';

export const getBoxList = createAction(GET_BOXLIST, api.getBoxList);
export const setCurrBox = createAction(SET_CURRBOX);
export const getBoxOpenResult = createAction(GET_BOXOPEN_RESULT);
export const setBoxInfoListDisplay = createAction(SET_BOXINFOLIST_DISPLAY);
export const initialBoxResultList = createAction(INIT_BOXRESULTLIST);
export const getBoxResultListWhere = createAction(GET_BOXRESULTLIST_WHERE);

const initialState = Map({
  boxs: List(),
  currBox: Map(),
  boxResultList: List(),
  boxResultListWhere: List()
});

export default handleActions({
  ...pender({
    type: GET_BOXLIST,
    onSuccess: (state, action) => {
      const boxs = action.payload.data;
      return state.set('boxs', fromJS(boxs));
    }
  }),
  [SET_CURRBOX]: (state, action) => {
    const {payload: packageCode} = action;
    const currBox = state.toJS().boxs.filter(box => box.packageCode === packageCode)[0];
    if(currBox === null || currBox === undefined) return state;

    const {itemInfo} = currBox;
    let currLuck = 0;

    const currBoxAddLuck = itemInfo.map((item) => {      
      const {luck} = item.luck;
      const currMin = currLuck + 1;
      currLuck += (luck * 100);
      const currMax = currLuck;
      
      return {
        ...item,
        luck: {
          luck: luck,
          min: String(currMin),
          max: String(currMax)
        }
      }
    });

    currBox.itemInfo = currBoxAddLuck;
    return state.set('currBox', fromJS(currBox))
                .setIn(['currBox', 'grid'], 'none')
                .set('boxResultList', new List())
                .set('boxResultListWhere', new List());
  },
  [GET_BOXOPEN_RESULT]: (state, action) => {
    const {payload} = action;
    let sumList = []; //group by

    const resultList = state.toJS().boxResultList.concat(payload).map((item, cnt) => {
      const {_id, itemName} = item;

      // group by 시작
      if(cnt === 0) {
        sumList.push({
          id: _id,
          name: itemName,
          value: 1
        });
      }else{
        let sameBoolean = false;

        sumList.forEach((obj, cnt) => {
          if(_id === obj.id) {
            sumList[cnt].value += 1;
            sameBoolean = true;
            return false; //반복문 끝
          }
        });
        
        if(!sameBoolean) {
          sumList.push({
            id: _id,
            name: itemName,
            value: 1
          });
        }
      }
      // group by 끝
      
      return {
        ...item,
        resultSeq: cnt + 1
      }
    });

    // itemInfo + group by value
    const currBoxBySum = state.toJS().currBox
    const currBoxBySumItemInfo = currBoxBySum.itemInfo.map(item => {
      let sum = 0;

      sumList.forEach((obj) => {
        if(item._id === obj.id) {
          sum = obj.value;
          return false;
        }
      });

      return {
        ...item,
        sumValue: sum
      }
    });

    currBoxBySum.itemInfo = currBoxBySumItemInfo;
    
    return state.set('boxResultList', resultList)
                .set('boxResultListWhere', resultList)
                .set('currBox', fromJS(currBoxBySum));
  },
  [SET_BOXINFOLIST_DISPLAY]: (state, action) => {
    const currDisp = state.getIn(['currBox', 'display']);
    return state.setIn(['currBox', 'display'], (currDisp === 'grid' || currDisp === undefined) ? 'none' : 'grid');
  },
  [INIT_BOXRESULTLIST]: (state, action) => {
    const currBox = state.toJS().currBox;
    const itemInfoInit = currBox.itemInfo.map(item => {
      return {
        ...item,
        sumValue: 0
      }
    });

    currBox.itemInfo = itemInfoInit;

    return state.set('boxResultList', new List())
                .set('boxResultListWhere', new List())
                .set('currBox', fromJS(currBox));
  },
  [GET_BOXRESULTLIST_WHERE]: (state, action) => {
    const {payload} = action;
    const resultList = state.toJS().boxResultList;

    if(payload === 'init') {
      return state.set('boxResultListWhere', fromJS(resultList));
    }else{
      return state.set('boxResultListWhere', fromJS(resultList.filter(result => result._id === payload)));
    }
  }
}, initialState);