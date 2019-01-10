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
    conStat: '5',
    skillStat: '5',
    itemDmgUp: '0',
    itemCriUp: '0',
    limitDmg: '0',
    isParasite: false,
    whereDoping: '0',
    invenDmg: 5,
    invenCri: 1,
    headShotRt: 3
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
    const {dmg, cri, stype1} = action.payload;
    const {conStat, skillStat, itemDmgUp, itemCriUp, limitDmg, isParasite, whereDoping} = state.toJS().myStat;

    const mainStat = stype1 === '1' ? skillStat : conStat;
    const currWeaponDmgCalc = dmg === undefined ? 1 : dmg;
    const parasiteUp = isParasite ? 3 : 0;
    const default_inven_dmg = Math.floor(Number(currWeaponDmgCalc)+Number(currWeaponDmgCalc)*(Number(mainStat)/100)+Number(mainStat));
    const item_inven_dmg = (default_inven_dmg/100)*Number(itemDmgUp);
    const inven_dmg = Math.floor((default_inven_dmg + item_inven_dmg)*(1+(Number(limitDmg)/100))*(1+parasiteUp/10)*(1+Number(whereDoping)/10));

    let inven_cri = Math.floor(((Number(cri)/5) * ((Number(skillStat)/100)+1)) + Number(itemCriUp) + 1);
    if(inven_cri > 50) inven_cri = 50;
    const head_atk_rt = (3+(skillStat/50)).toFixed(2);

    return state.setIn(['myStat', 'invenDmg'], inven_dmg)
                .setIn(['myStat', 'invenCri'], inven_cri)
                .setIn(['myStat', 'headShotRt'], head_atk_rt);
  }
}, initialState);