import React, { Component } from 'react';
import DPSSimul from 'components/myspec/DPSSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';

class DPSSimulContainer extends Component {

  setDPSOption = (e) => {
    const {MySpecActions, dpsSim} = this.props;
    const {name, value} = e.target;

    if(dpsSim.huntStartBool) {
      alert("사냥중입니다.. 사냥중단후 옵션을 수정해야 합니다.");
      return false;
    }

    MySpecActions.setDpsOption({name, value});
  }

  componentDidUpdate(prevProps, prevState) {
    const {MySpecActions} = this.props;
    const {_id, item_dtl_dv, stype1} = this.props.weaponView.itemInfo;
    const prevId = prevProps.weaponView.itemInfo._id;

    if(_id !== prevId) {
      const {currInterval, currDmgInterval} = this.props.dpsSim;
      clearInterval(currInterval);
      clearInterval(currDmgInterval);

      MySpecActions.setDPSOPtionInitial({item_dtl_dv, stype1});
      MySpecActions.secondInitial();
    }
  }

  getRandomDmg = (totalDmg, invenCri, currHeadCounterValue, fireUse) => {
    let baseTotalDmg = {
      dmg: totalDmg.normalDmg,
      name: 'normal'
    }
    const criRandom = Math.floor(Math.random() * 100) + 1;
    const headRandom = Math.floor(Math.random() * 1000) + 1;
    if(criRandom <= invenCri) { //크리or치명
      if(currHeadCounterValue === '1') { //크리/10확률로 헤드샷(카운터)
        baseTotalDmg = {
          dmg: headRandom <= Number(invenCri) ? (fireUse ? totalDmg.headDmgFire : totalDmg.headDmg) : (fireUse ? totalDmg.criDmgFire : totalDmg.criDmg),
          name: headRandom <= Number(invenCri) ? 'counter' : 'cri'
        }
      }else if(currHeadCounterValue === '2' || currHeadCounterValue === '6') { //헤드샷50%
        baseTotalDmg = {
          dmg: headRandom <= 500 ? (fireUse ? totalDmg.headDmgFire : totalDmg.headDmg) : (fireUse ? totalDmg.criDmgFire : totalDmg.criDmg),
          name: headRandom <= 500 ? 'head' : 'cri'
        }
      }else if(currHeadCounterValue === '3') { //헤드샷100%
        baseTotalDmg = {
          dmg: (fireUse ? totalDmg.headDmgFire : totalDmg.headDmg),
          name: 'head'
        }
      }else if(currHeadCounterValue === '4') { //헤드샷90%
        baseTotalDmg = {
          dmg: headRandom <= 900 ? (fireUse ? totalDmg.headDmgFire : totalDmg.headDmg) : (fireUse ? totalDmg.criDmgFire : totalDmg.criDmg),
          name: headRandom <= 900 ? 'head' : 'cri'
        }
      }else if(currHeadCounterValue === '5') { //헤드샷60%
        baseTotalDmg = {
          dmg: headRandom <= 600 ? (fireUse ? totalDmg.headDmgFire : totalDmg.headDmg) : (fireUse ? totalDmg.criDmgFire : totalDmg.criDmg),
          name: headRandom <= 600 ? 'head' : 'cri'
        }
      }
    }else{
      baseTotalDmg = {
        dmg: (fireUse ? totalDmg.normalDmgFire : totalDmg.normalDmg),
        name: 'normal'
      }
    }
    const dmgRandomBetween = (Number(baseTotalDmg.dmg.max) - Number(baseTotalDmg.dmg.min) + 1);
    const dmgRandom = Math.floor(Math.random() * dmgRandomBetween) + Number(baseTotalDmg.dmg.min);

    return {dmg: dmgRandom, name: baseTotalDmg.name};
  }

  huntStart = () => {
    const timeSpeed = 1; //배속
    const second = 1000 / timeSpeed;
    const {MySpecActions, myStat, weaponView, dpsSim} =  this.props;
    const {speed, stype1} = weaponView.itemInfo;
    const {totalDmg, invenCri} = myStat;
    const {currInterval, currDmgInterval, currHeadCounterValue, currFireValue, huntStartBool} = dpsSim;

    if(huntStartBool) {
      alert('사냥중 입니다. 사냥중단 후 다시 해보세요');
      return false;
    }

    MySpecActions.startHunt(); //사냥시작여부 True

    clearInterval(currInterval);
    clearInterval(currDmgInterval);
    
    const interval = setInterval(() => {
      const {MySpecActions, dpsSim} = this.props;
      const {fireCoolTime, fireUseTime, fireUse} = dpsSim;      
      const currHuntSecond = Number(dpsSim.huntSecond) + 1;

      let currFireCoolTime = Number(fireCoolTime);
      let currFireUseTime = Number(fireUseTime);
      let currFireUse = fireUse;

      if(currFireValue === '1' || currFireValue === '3') {
        if(currFireCoolTime > 0) {
          currFireCoolTime = currFireCoolTime - 1;
          currFireUse = false;
        }
        
        if(currFireCoolTime === 0) {
          currFireUseTime = currFireUseTime - 1;
          currFireUse = true;
        }

        if(currFireUseTime === 0) {
          currFireCoolTime = '40';
          currFireUseTime = '13';
          currFireUse = false;
        }
      }

      MySpecActions.setHuntSecond({currHuntSecond, currFireCoolTime, currFireUseTime, currFireUse, interval});
    }, second);
    
    const dmgInterval = setInterval(() => {
      const {MySpecActions, dpsSim} = this.props;
      const {dmgRandomSum, fireUse, dmgRandomList} = dpsSim;
      const dmgRandom = this.getRandomDmg(totalDmg, invenCri, currHeadCounterValue, fireUse);
      
      MySpecActions.setDmgRandom({dmgRandom, dmgInterval, dmgRandomSum, dmgRandomList});
    }, second * (60 / Number(stype1 === '1' ? speed : '180')));
  }

  huntStop = () => {
    const {MySpecActions, dpsSim} = this.props;
    const {currInterval, currDmgInterval} = dpsSim;

    clearInterval(currInterval);
    clearInterval(currDmgInterval);
    MySpecActions.secondInitial();
  }

  inputClick = (e) => {
    e.target.select();
  }

  componentWillUnmount() {
    const {currInterval, currDmgInterval} = this.props.dpsSim;
    clearInterval(currInterval);
    clearInterval(currDmgInterval);
  }
  
  render() {
    const {setDPSOption, huntStart, huntStop, inputClick} = this;
    const {
      currHeadCounterValue, currHeadCounterList, currFireValue, 
      currFireList, huntSecond, dmgRandom, dmgRandomSum, 
      fireUse, fireCoolTime, fireUseTime, monsterCon, monsterExp,
      huntStartBool, dmgRandomList
    } = this.props.dpsSim;
    
    return (
      <DPSSimul
      setDPSOption={setDPSOption}
      currHeadCounterValue={currHeadCounterValue}
      currHeadCounterList={currHeadCounterList}
      currFireValue={currFireValue}
      currFireList={currFireList}
      huntStart={huntStart}
      huntSecond={huntSecond}
      huntStop={huntStop}
      dmgRandom={dmgRandom}
      dmgRandomSum={dmgRandomSum}
      fireUse={fireUse}
      fireCoolTime={fireCoolTime}
      fireUseTime={fireUseTime}
      inputClick={inputClick}
      monsterCon={monsterCon}
      monsterExp={monsterExp}
      huntStartBool={huntStartBool}
      dmgRandomList={dmgRandomList}
      />
    );
  }
}

export default connect(
  (state) => ({
    dpsSim: state.myspec.toJS().dpsSim,
    weaponView: state.weapon.toJS().weaponView,
    myStat: state.myspec.toJS().myStat
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch)
  })
)(DPSSimulContainer);