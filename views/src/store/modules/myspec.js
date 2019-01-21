import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
// import {pender} from 'redux-pender';
// import * as api from 'lib/api';

const SET_MYSPEC_STAT = 'myspec/SET_MYSPEC_STAT';
const GET_INVEN_DMAGE = 'myspec/GET_INVEN_DMAGE';
const TYPE_INITIAL = 'myspec/TYPE_INITIAL';
const SET_DPSOPTIONS = 'myspec/SET_DPSOPTIONS';
const SET_DPSOPTIONS_INITIAL = 'myspec/SET_DPSOPTIONS_INITIAL';
const SET_HUNTSECOND = 'myspec/SET_HUNTSECOND';
const SET_DMG_RANDOM = 'myspec/SET_DMG_RANDOM';
const SECOND_INITIAL = 'myspec/SECOND_INITIAL';
const START_HUNT = 'myspec/START_HUNT';
const SECOND_REST = 'myspec/SECOND_REST';

export const setMyStat = createAction(SET_MYSPEC_STAT);
export const getInvenDmage = createAction(GET_INVEN_DMAGE);
export const typeInitial = createAction(TYPE_INITIAL);
export const setDpsOption = createAction(SET_DPSOPTIONS);
export const setDPSOPtionInitial = createAction(SET_DPSOPTIONS_INITIAL);
export const setHuntSecond = createAction(SET_HUNTSECOND);
export const setDmgRandom = createAction(SET_DMG_RANDOM);
export const secondInitial = createAction(SECOND_INITIAL);
export const startHunt = createAction(START_HUNT);
export const secondRest = createAction(SECOND_REST);

const initialState = Map({
  myStat: Map({
    mainStat: '5',
    conStat: '5',
    skillStat: '5',
    itemDmgUp: '0',
    itemCriUp: '0',
    limitDmg: '0',
    isParasite: '0',
    whereDoping: '0',
    invenDmg: 5,
    invenCri: 1,
    headShotRt: 3,
    monsterSize: '소형',
    monsterType: '일반',
    myDmgType: '일반',
    currSkillSeq: '0',
    dmgEvent: '0',
    totalDmg: {
      normalDmg: {name: 'normalDmg', min: '0', max: '0'},
      normalDmgFire: {name: 'normalDmgFire', min: '0', max: '0'},
      criDmg: {name: 'criDmg', min: '0', max: '0'},
      criDmgFire: {name: 'criDmgFire', min: '0', max: '0'},
      headDmg: {name: 'headDmg', min: '0', max: '0'},
      headDmgFire: {name: 'headDmgFire', min: '0', max: '0'}
    }
  }),
  mySkill: fromJS([
    {seq:'0', weaponType:'', name:'', img:'', increaseTarget:'', increaseRt:'0', costVigor:'0', },
    {seq:'1', weaponType:'도검', name:'치명타격', img:'/resource/img/skill_ico001.gif', increaseTarget:'cri', increaseRt:'2', costVigor:'25', },
    {seq:'2', weaponType:'도검', name:'전력타격', img:'/resource/img/skill_ico002.gif', increaseTarget:'all', increaseRt:'1.5', costVigor:'35', },
    {seq:'3', weaponType:'둔기', name:'전력타격', img:'/resource/img/skill_ico003.gif', increaseTarget:'all', increaseRt:'4', costVigor:'250', },
    {seq:'4', weaponType:'도끼', name:'전력타격', img:'/resource/img/skill_ico004.gif', increaseTarget:'all', increaseRt:'2', costVigor:'75', },
    {seq:'5', weaponType:'장창', name:'전력투척', img:'/resource/img/skill_ico005.gif', increaseTarget:'all', increaseRt:'2', costVigor:'60', },
    {seq:'6', weaponType:'돌격소총', name:'치명연사', img:'/resource/img/skill_ico006.gif', increaseTarget:'cri', increaseRt:'2', costVigor:'25', },
    {seq:'7', weaponType:'돌격소총', name:'급소연사', img:'/resource/img/skill_ico007.gif', increaseTarget:'all', increaseRt:'1.5', costVigor:'40', },
    {seq:'8', weaponType:'기관총', name:'치명연사', img:'/resource/img/skill_ico008.gif', increaseTarget:'cri', increaseRt:'2', costVigor:'30', },
    {seq:'9', weaponType:'기관총', name:'급소연사', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'1.5', costVigor:'50', },
    {seq:'10', weaponType:'저격소총', name:'원거리추가', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'1.5', costVigor:'0', },
    {seq:'11', weaponType:'샷건', name:'벽부딪힘', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'1.5', costVigor:'0', },
    {seq:'12', weaponType:'샷건', name:'근접사격', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'4', costVigor:'0', },
    {seq:'13', weaponType:'샷건', name:'벽부딪힘+근접사격', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'6', costVigor:'0', },
    {seq:'14', weaponType:'기관총', name:'치명연사+벽부딪힘', img:'/resource/img/skill_ico009.gif', increaseTarget:'cri', increaseRt:'2', costVigor:'50', },
    {seq:'15', weaponType:'기관총', name:'급소연사+벽부딪힘', img:'/resource/img/skill_ico009.gif', increaseTarget:'all', increaseRt:'2.25', costVigor:'50'}
  ]),
  dpsSim: Map({
    huntStartBool: false,
    huntSecond: '0',
    currInterval: null,
    dmgRandom: {dmg: '0', name: 'normal'},
    dmgRandomSum: '0',
    dmgRandomList: List(),
    dmgRandomFireSum: '0',
    totalDmgSum: '0',
    totalMonsterKill: '0',
    currDmgInterval: null,
    fireCoolTime: '40',
    fireUse: false,
    fireUseTime: '13',
    currHeadCounterValue: '0',
    currHeadCounterList: List(),
    headCounterOption: fromJS([
      {seq: '0', stype1: '0', weaponType: '', description: '없음' },
      {seq: '1', stype1: '2', weaponType: '', description: '크리티컬이 떴을때 10%확률로 카운터'},
      {seq: '2', stype1: '2', weaponType: '장창', description: '헤드샷 확률 50%'},
      {seq: '3', stype1: '1', weaponType: '', description: '신컨 (헤드샷 확률 100%)'},
      {seq: '4', stype1: '1', weaponType: '', description: '중컨 (헤드샷 확률 90%)'},
      {seq: '5', stype1: '1', weaponType: '', description: 'X컨 (헤드샷 확률 60%)'},
      {seq: '6', stype1: '1', weaponType: '중화기', description: '헤드샷 확률 50%'}
    ]),
    currFireValue: '0',
    currFireList: List(),
    fireOption: fromJS([
      {seq: '0', stype1: '1', weaponType: '저격소총', description: '없음' },
      {seq: '1', stype1: '1', weaponType: '', description: '발화토이 (쿨40초/지속13초)'},
      {seq: '2', stype1: '1', weaponType: '', description: '소이탄 (체력10% 깍았을때 발화)'},
      {seq: '3', stype1: '2', weaponType: '', description: '발화토이 (쿨40초/지속13초)'},
      {seq: '4', stype1: '2', weaponType: '', description: '자체발화 (체력10% 깍았을때 발화)'}
    ]),
    monsterCon: '1050000000',
    monsterConRe: '1050000000',
    monsterExp: '450000000',
    myExp: '0',
    timeSpeed: '1'
  })
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
    const {name, value} = action.payload;
    return state.setIn(['myStat', name], value);  

    // if(name === 'isParasite') {
    //   return state.setIn(['myStat', name], value);  
    // }else{
    //   return state.setIn(['myStat', name], value);
    // }
  },
  [GET_INVEN_DMAGE]: (state, action) => {
    const {dmg, cri, stype1, size} = action.payload;
    const {conStat, skillStat, itemDmgUp, itemCriUp, limitDmg, isParasite, whereDoping, monsterSize, monsterType, myDmgType, currSkillSeq, dmgEvent} = state.toJS().myStat;
    const {mySkill} = state.toJS();

    const mainStat = stype1 === '1' ? skillStat : conStat;
    const currWeaponDmgCalc = dmg === undefined ? 1 : dmg;
    const parasiteUp = isParasite === '3' ? 3 : 0;
    const default_inven_dmg = Math.floor(Number(currWeaponDmgCalc)+Number(currWeaponDmgCalc)*(Number(mainStat)/100)+Number(mainStat));
    const item_inven_dmg = (default_inven_dmg/100)*Number(itemDmgUp);
    const inven_dmg = Math.floor((default_inven_dmg + item_inven_dmg)*(1+(Number(limitDmg)/100))*(1+parasiteUp/10)*(1+Number(whereDoping)/10));

    let inven_cri = Math.floor(((Number(cri)/5) * ((Number(skillStat)/100)+1)) + Number(itemCriUp) + 1);
    if(inven_cri > 50) inven_cri = 50;
    const head_atk_rt = (3+(skillStat/50)).toFixed(2);

    const currSkill = mySkill.filter(skill => skill.seq === currSkillSeq)[0];
    const {increaseTarget, increaseRt, seq} = currSkill;
    const sizeDmg = sizeByDmg(size, monsterSize);
    const typeDmg = typeByDmg(myDmgType, monsterType);
    let defaultDmg = (typeDmg.text === '오류' || sizeDmg.text === '오류') ? '0' : inven_dmg + (inven_dmg * Number(sizeDmg.value)) + (inven_dmg * Number(typeDmg.value));
    defaultDmg = defaultDmg * 1.1 * (Number(dmgEvent)/100 + 1) * ( isParasite === '2.5' ? Number(isParasite)/10 + 1 : 1); //사공+이벤공증+정규
    defaultDmg = defaultDmg * (increaseTarget === 'all' ? Number(increaseRt) : 1);
    defaultDmg = defaultDmg * (seq === '14' ? 1.5 : 1); // 기관총 치명연사+벽부딪힘

    const totalDmg = {
      normalDmg: {
        name: 'normalDmg',
        min: Math.ceil(defaultDmg * 0.8),
        max: Math.ceil(defaultDmg * 1.2)
      },
      normalDmgFire: {
        name: 'normalDmgFire',
        min: Math.ceil(defaultDmg * 1.5 * 0.8),
        max: Math.ceil(defaultDmg * 1.5 * 1.2)
      },
      criDmg: {
        name: 'criDmg',
        min: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.2)
      },
      criDmgFire: {
        name: 'criDmgFire',
        min: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt/2 * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.5 * 1.2)
      },
      headDmg: {
        name: 'headDmg',
        min: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 0.8),
        max: Math.ceil(defaultDmg * (head_atk_rt * (increaseTarget === 'cri' ? Number(increaseRt) : 1)) * 1.2)
      },
      headDmgFire: {
        name: 'headDmgFire',
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
  },
  [SET_DPSOPTIONS]: (state, action) => {
    const {name, value} = action.payload;
    if(name === 'monsterCon') {
      return state.setIn(['dpsSim', name], value)
                  .setIn(['dpsSim', 'monsterConRe'], value);
    }
    return state.setIn(['dpsSim', name], value);
  },
  [SET_DPSOPTIONS_INITIAL]: (state, action) => {
    const {item_dtl_dv, stype1} = action.payload;
    const currHcList = state.toJS().dpsSim.headCounterOption.filter(option =>
      (
        item_dtl_dv === '중화기' || item_dtl_dv === '장창' ?
        option.weaponType === item_dtl_dv :
        option.stype1 === stype1 && (option.weaponType !== '중화기' && option.weaponType !== '장창')
      )
    );
    const currFrList = state.toJS().dpsSim.fireOption.filter(option => 
      (
        item_dtl_dv === '저격소총' ?
        option.weaponType === item_dtl_dv :
        option.stype1 === stype1 && (option.weaponType !== '저격소총')
      )
    );
    
    return state.setIn(['dpsSim', 'currHeadCounterList'], fromJS(currHcList))
                .setIn(['dpsSim', 'currHeadCounterValue'], currHcList[0].seq)
                .setIn(['dpsSim', 'currFireList'], fromJS(currFrList))
                .setIn(['dpsSim', 'currFireValue'], currFrList[0].seq);
  },
  [SECOND_INITIAL]: (state, action) => {
    return state.setIn(['dpsSim', 'huntSecond'], '0')
                .setIn(['dpsSim', 'currInterval'], null)
                .setIn(['dpsSim', 'dmgRandom'], {dmg: '0', name: 'normal'})
                .setIn(['dpsSim', 'currDmgInterval'], null)
                .setIn(['dpsSim', 'dmgRandomSum'], '0')
                .setIn(['dpsSim', 'dmgRandomFireSum'], '0')
                .setIn(['dpsSim', 'fireCoolTime'], '40')
                .setIn(['dpsSim', 'currFireInterval'], null)
                .setIn(['dpsSim', 'fireUseTime'], '13')
                .setIn(['dpsSim', 'currFireUseInterval'], null)
                .setIn(['dpsSim', 'fireUse'], false)
                .setIn(['dpsSim', 'huntStartBool'], false)
                .setIn(['dpsSim', 'myExp'], '0')
                .setIn(['dpsSim', 'monsterConRe'], state.getIn(['dpsSim', 'monsterCon']))
                .setIn(['dpsSim', 'totalDmgSum'], '0')
                .setIn(['dpsSim', 'totalMonsterKill'], '0')
                // .setIn(['dpsSim', 'dmgRandomList'], List())
                ;
  },
  [SET_HUNTSECOND]: (state, action) => {
    const {currHuntSecond, currFireCoolTime, currFireUseTime, currFireUse, interval, currDmgRandomFireSum} = action.payload;
    
    return state.setIn(['dpsSim', 'huntSecond'], currHuntSecond)
                .setIn(['dpsSim', 'currInterval'], interval)
                .setIn(['dpsSim', 'fireCoolTime'], currFireCoolTime)
                .setIn(['dpsSim', 'fireUseTime'], currFireUseTime)
                .setIn(['dpsSim', 'fireUse'], currFireUse)
                .setIn(['dpsSim', 'dmgRandomFireSum'], currDmgRandomFireSum);
  },
  [SET_DMG_RANDOM]: (state, action) => {
    const {dmgRandom, dmgInterval, dmgRandomSum, dmgRandomList, dmgRandomFireSum, currFireValue, fireUse, myExp, totalDmgSum, totalMonsterKill} = action.payload;
    const {monsterType} = state.toJS().myStat;
    const {monsterCon, monsterExp} = state.toJS().dpsSim;
    const dmgFire = currFireValue === '2' ? 
      Number(dmgRandom.dmg) + (Number(dmgRandom.dmg) * typeByDmg('소이', monsterType).value) : 
      Number(dmgRandom.dmg)
    ;
    let dmgRandomFireSumResult = (currFireValue === '2' || currFireValue === '4') ?
      Number(dmgRandomFireSum) + dmgFire : 0
    ;
    
    if(currFireValue === '2' || currFireValue === '4') {
      dmgRandom.dmg = fireUse ? dmgRandom.dmg : Math.floor(dmgFire);
    }
    
    let dmgRandomSumResult = Number(dmgRandomSum) + Number(dmgRandom.dmg);
    const totalDmgSumResult = Number(totalDmgSum) + Number(dmgRandom.dmg);
    
    let setRandomDmgList = dmgRandomList;
    const setRandomDmgListCnt = dmgRandomList.length;

    setRandomDmgList.push(dmgRandom);
    
    if(setRandomDmgListCnt > 4) {
      setRandomDmgList = setRandomDmgList.slice(1, 6);
    }

    const currMyExp = Math.floor(Number(myExp) + (monsterExp * ((Number(dmgRandom.dmg)/monsterCon*100).toFixed(2)/100)));
    let currMonsterConRe = monsterCon - dmgRandomSumResult;
    let currFireUse = fireUse;
    let currTotalMonsterKill = totalMonsterKill;

    if(currMonsterConRe <= 0) {
      currMonsterConRe = monsterCon;
      dmgRandomSumResult = 0;
      currTotalMonsterKill = Number(totalMonsterKill) + 1;
      if((currFireValue === '2' || currFireValue === '4')) {
        dmgRandomFireSumResult = 0;
        currFireUse = false;
      }
    }
    
    return state.setIn(['dpsSim', 'dmgRandom'], dmgRandom)
                .setIn(['dpsSim', 'currDmgInterval'], dmgInterval)
                .setIn(['dpsSim', 'dmgRandomSum'], String(dmgRandomSumResult))
                .setIn(['dpsSim', 'dmgRandomList'], setRandomDmgList)
                .setIn(['dpsSim', 'dmgRandomFireSum'], String(dmgRandomFireSumResult))
                .setIn(['dpsSim', 'monsterConRe'], String(currMonsterConRe))
                .setIn(['dpsSim', 'myExp'], String(currMyExp))
                .setIn(['dpsSim', 'fireUse'], currFireUse)
                .setIn(['dpsSim', 'totalDmgSum'], totalDmgSumResult)
                .setIn(['dpsSim', 'totalMonsterKill'], currTotalMonsterKill);
  },
  [START_HUNT]: (state, action) => {
    return state.setIn(['dpsSim', 'huntStartBool'], true);
  },
  [SECOND_REST]: (state, action) => {
    return state.setIn(['dpsSim', 'huntStartBool'], false);
  }
}, initialState);