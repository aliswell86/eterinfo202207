import {createAction, handleActions} from 'redux-actions';
import {Map,/*, List, fromJS*/
fromJS} from 'immutable';
// import {pender} from 'redux-pender';
// import * as api from 'lib/api';

const SET_MYSPEC_STAT = 'myspec/SET_MYSPEC_STAT';
const GET_INVEN_DMAGE = 'myspec/GET_INVEN_DMAGE';
const TYPE_INITIAL = 'myspec/TYPE_INITIAL';

export const setMyStat = createAction(SET_MYSPEC_STAT);
export const getInvenDmage = createAction(GET_INVEN_DMAGE);
export const typeInitial = createAction(TYPE_INITIAL);

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
    headShotRt: 3,
    monsterSize: '소형',
    monsterType: '일반',
    myDmgType: '일반',
    currSkillSeq: '0',
    totalDmg: {
      normalDmg: {
        min: '0',
        max: '0'
      },
      normalDmgFire: {
        min: '0',
        max: '0'
      },
      criDmg: {
        min: '0',
        max: '0'
      },
      criDmgFire: {
        min: '0',
        max: '0'
      },
      headDmg: {
        min: '0',
        max: '0'
      },
      headDmgFire: {
        min: '0',
        max: '0'
      }
    }
  }),
  mySkill: fromJS([
    {
      seq: '0',
      weaponType: '',
      name: '',
      img: '',
      increaseTarget: '',
      increaseRt: '0',
      costVigor: '0'
    },
    {
      seq: '1',
      weaponType: '도검',
      name: '치명타격',
      img: '/resource/img/skill_ico001.gif',
      increaseTarget: 'cri',
      increaseRt: '2',
      costVigor: '25'
    },
    {
      seq: '2',
      weaponType: '도검',
      name: '전력타격',
      img: '/resource/img/skill_ico002.gif',
      increaseTarget: 'all',
      increaseRt: '1.5',
      costVigor: '35'
    },
    {
      seq: '3',
      weaponType: '둔기',
      name: '전력타격',
      img: '/resource/img/skill_ico003.gif',
      increaseTarget: 'all',
      increaseRt: '4',
      costVigor: '250'
    },
    {
      seq: '4',
      weaponType: '도끼',
      name: '전력타격',
      img: '/resource/img/skill_ico004.gif',
      increaseTarget: 'all',
      increaseRt: '2',
      costVigor: '75'
    },
    {
      seq: '5',
      weaponType: '장창',
      name: '전력투척',
      img: '/resource/img/skill_ico005.gif',
      increaseTarget: 'all',
      increaseRt: '2',
      costVigor: '60'
    },
    {
      seq: '6',
      weaponType: '돌격소총',
      name: '치명연사',
      img: '/resource/img/skill_ico006.gif',
      increaseTarget: 'cri',
      increaseRt: '2',
      costVigor: '25'
    },
    {
      seq: '7',
      weaponType: '돌격소총',
      name: '급소연사',
      img: '/resource/img/skill_ico007.gif',
      increaseTarget: 'all',
      increaseRt: '1.5',
      costVigor: '40'
    },
    {
      seq: '8',
      weaponType: '기관총',
      name: '치명연사',
      img: '/resource/img/skill_ico008.gif',
      increaseTarget: 'cri',
      increaseRt: '2',
      costVigor: '30'
    },
    {
      seq: '9',
      weaponType: '기관총',
      name: '급소연사',
      img: '/resource/img/skill_ico009.gif',
      increaseTarget: 'all',
      increaseRt: '1.5',
      costVigor: '50'
    }
  ])
});

const VERY_GOOD = {text: '매우좋음(+50%)', value: '0.5'};
const GOOD = {text: '좋음(+25%)', value: '0.25'};
const SOSO = {text: '보통', value: '0'};
const BAD = {text: '나쁨(-25%)', value: '-0.25'};
const VERY_BAD = {text: '매우나쁨(-50%)', value: '-0.5'};

const sizeByDmg = (weaponSize, monsterSize) => {
  let result = {text: '오류', value: '0'};
  
  switch(weaponSize) {
    case '소형': 
      if(monsterSize === '소형') result = SOSO;
      else if(monsterSize === '중형') result = BAD;
      else if(monsterSize === '대형') result = VERY_BAD;
    break;
    case '중형': 
      if(monsterSize === '소형') result = GOOD;
      else if(monsterSize === '중형') result = SOSO;
      else if(monsterSize === '대형') result = BAD;
    break;
    case '대형': 
      if(monsterSize === '소형') result = VERY_GOOD;
      else if(monsterSize === '중형') result = GOOD;
      else if(monsterSize === '대형') result = SOSO;
    break;
    default: result = {text: '오류', value: '0'};
    break;
  }
  
  return result;
}

const typeByDmg = (myType, monsterType) => {
  let result = {text: '오류', value: '0'};

  switch(myType) {
    case '일반': 
      if(monsterType === '일반') result = SOSO;
      else if(monsterType === '연성') result = SOSO;
      else if(monsterType === '강성') result = SOSO;
      else if(monsterType === '변이') result = SOSO;
      else if(monsterType === '장갑') result = BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case '소이': 
      if(monsterType === '일반') result = SOSO;
      else if(monsterType === '연성') result = GOOD;
      else if(monsterType === '강성') result = BAD;
      else if(monsterType === '변이') result = SOSO;
      else if(monsterType === '장갑') result = BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case 'Slug': 
      if(monsterType === '일반') result = GOOD;
      else if(monsterType === '연성') result = SOSO;
      else if(monsterType === '강성') result = SOSO;
      else if(monsterType === '변이') result = BAD;
      else if(monsterType === '장갑') result = BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case '철갑': 
      if(monsterType === '일반') result = BAD;
      else if(monsterType === '연성') result = BAD;
      else if(monsterType === '강성') result = GOOD;
      else if(monsterType === '변이') result = BAD;
      else if(monsterType === '장갑') result = SOSO;
      else if(monsterType === '중장갑') result = SOSO;
    break;
    case '열화우라늄': 
      if(monsterType === '일반') result = BAD;
      else if(monsterType === '연성') result = SOSO;
      else if(monsterType === '강성') result = SOSO;
      else if(monsterType === '변이') result = GOOD;
      else if(monsterType === '장갑') result = BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case '유탄': 
      if(monsterType === '일반') result = GOOD;
      else if(monsterType === '연성') result = GOOD;
      else if(monsterType === '강성') result = BAD;
      else if(monsterType === '변이') result = BAD;
      else if(monsterType === '장갑') result = VERY_BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case '대인로켓': 
      if(monsterType === '일반') result = VERY_GOOD;
      else if(monsterType === '연성') result = VERY_GOOD;
      else if(monsterType === '강성') result = BAD;
      else if(monsterType === '변이') result = BAD;
      else if(monsterType === '장갑') result = VERY_BAD;
      else if(monsterType === '중장갑') result = VERY_BAD;
    break;
    case '대전차탄': 
      if(monsterType === '일반') result = BAD;
      else if(monsterType === '연성') result = BAD;
      else if(monsterType === '강성') result = BAD;
      else if(monsterType === '변이') result = GOOD;
      else if(monsterType === '장갑') result = GOOD;
      else if(monsterType === '중장갑') result = SOSO;
    break;
    case '대전차로켓': 
      if(monsterType === '일반') result = BAD;
      else if(monsterType === '연성') result = BAD;
      else if(monsterType === '강성') result = GOOD;
      else if(monsterType === '변이') result = GOOD;
      else if(monsterType === '장갑') result = VERY_GOOD;
      else if(monsterType === '중장갑') result = GOOD;
    break;
    case '중금속탄': 
      if(monsterType === '일반') result = GOOD;
      else if(monsterType === '연성') result = BAD;
      else if(monsterType === '강성') result = GOOD;
      else if(monsterType === '변이') result = SOSO;
      else if(monsterType === '장갑') result = BAD;
      else if(monsterType === '중장갑') result = BAD;
    break;
    case '전속성탄': 
      if(monsterType === '일반') result = GOOD;
      else if(monsterType === '연성') result = GOOD;
      else if(monsterType === '강성') result = GOOD;
      else if(monsterType === '변이') result = GOOD;
      else if(monsterType === '장갑') result = GOOD;
      else if(monsterType === '중장갑') result = GOOD;
    break;
    default: result = {text: '오류', value: '0'};
    break;
  }

  return result;
}

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
    const {dmg, cri, stype1, size} = action.payload;
    const {conStat, skillStat, itemDmgUp, itemCriUp, limitDmg, isParasite, whereDoping, monsterSize, monsterType, myDmgType, currSkillSeq} = state.toJS().myStat;
    const {mySkill} = state.toJS();

    const mainStat = stype1 === '1' ? skillStat : conStat;
    const currWeaponDmgCalc = dmg === undefined ? 1 : dmg;
    const parasiteUp = isParasite ? 3 : 0;
    const default_inven_dmg = Math.floor(Number(currWeaponDmgCalc)+Number(currWeaponDmgCalc)*(Number(mainStat)/100)+Number(mainStat));
    const item_inven_dmg = (default_inven_dmg/100)*Number(itemDmgUp);
    const inven_dmg = Math.floor((default_inven_dmg + item_inven_dmg)*(1+(Number(limitDmg)/100))*(1+parasiteUp/10)*(1+Number(whereDoping)/10));

    let inven_cri = Math.floor(((Number(cri)/5) * ((Number(skillStat)/100)+1)) + Number(itemCriUp) + 1);
    if(inven_cri > 50) inven_cri = 50;
    const head_atk_rt = (3+(skillStat/50)).toFixed(2);

    const currSkill = mySkill.filter(skill => skill.seq === currSkillSeq)[0];
    const {increaseTarget, increaseRt} = currSkill;
    const sizeDmg = sizeByDmg(size, monsterSize);
    const typeDmg = typeByDmg(myDmgType, monsterType);
    let defaultDmg = (typeDmg.text === '오류' || sizeDmg.text === '오류') ? '0' :
      inven_dmg + (inven_dmg * Number(sizeDmg.value)) + (inven_dmg * Number(typeDmg.value));
    defaultDmg = defaultDmg * 1.1 * 1.2; //사공+(보정)
    defaultDmg = defaultDmg * (increaseTarget === 'all' ? Number(increaseRt) : 1);

    const totalDmg = {
      normalDmg: {
        min: Math.ceil(defaultDmg * 0.8),
        max: Math.ceil(defaultDmg * 1.2)
      },
      normalDmgFire: {
        min: Math.ceil(defaultDmg * 1.5 * 0.8),
        max: Math.ceil(defaultDmg * 1.5 * 1.2)
      },
      criDmg: {
        min: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.2)
      },
      criDmgFire: {
        min: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 1.2)
      },
      headDmg: {
        min: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.2)
      },
      headDmgFire: {
        min: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 1.2)
      }
    }

    return state.setIn(['myStat', 'invenDmg'], inven_dmg)
                .setIn(['myStat', 'invenCri'], inven_cri)
                .setIn(['myStat', 'headShotRt'], head_atk_rt)
                .setIn(['myStat', 'totalDmg'], totalDmg);
  },
  [TYPE_INITIAL]: (state, action) => {
    return state.setIn(['myStat', 'currSkillSeq'], '0')
                .setIn(['myStat', 'monsterType'], '일반')
                .setIn(['myStat', 'myDmgType'], '일반');  
  }
}, initialState);