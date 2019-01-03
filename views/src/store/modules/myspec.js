import {createAction, handleActions} from 'redux-actions';
import {Map/*, List, fromJS*/} from 'immutable';
// import {pender} from 'redux-pender';
// import * as api from 'lib/api';

const SET_MYSPEC_STAT = 'myspec/SET_MYSPEC_STAT';
const GET_INVEN_DMAGE = 'myspec/GET_INVEN_DMAGE';

export const setMyStat = createAction(SET_MYSPEC_STAT);
export const getInvenDmage = createAction(GET_INVEN_DMAGE);

const initialState = Map({
  myStat: Map({
    mainStat: '5',
    itemDmgUp: '0',
    limitDmg: '0',
    isParasite: false,
    whereDoping: '0',
    invenDmg: 5
  })
});

export default handleActions({
  [SET_MYSPEC_STAT]: (state, action) => {
    const {name, value, checked} = action.payload;

    if(name === 'isParasite') {
      return state.setIn(['myStat', name], checked);  
    }else{
      return state.setIn(['myStat', name], value);
    }
  },
  [GET_INVEN_DMAGE]: (state, action) => {
    const currWeaponDmg = action.payload;
    const {mainStat, itemDmgUp, limitDmg, isParasite, whereDoping} = state.toJS().myStat;
    const currWeaponDmgCalc = currWeaponDmg === undefined ? 1 : currWeaponDmg;
    const parasiteUp = isParasite ? 3 : 0;
    const default_inven_dmg = Math.floor(Number(currWeaponDmgCalc)+Number(currWeaponDmgCalc)*(Number(mainStat)/100)+Number(mainStat));
    const item_inven_dmg = (default_inven_dmg/100)*Number(itemDmgUp);
    const inven_dmg = Math.floor((default_inven_dmg + item_inven_dmg)*(1+(Number(limitDmg)/100))*(1+parasiteUp/10)*(1+Number(whereDoping)/10));

    return state.setIn(['myStat', 'invenDmg'], inven_dmg);

  }
}, initialState);