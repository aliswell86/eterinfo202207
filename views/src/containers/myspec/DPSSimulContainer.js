import React, { Component } from 'react';
import DPSSimul from 'components/myspec/DPSSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';

class DPSSimulContainer extends Component {

  setDPSOption = (e) => {
    const {MySpecActions} = this.props;
    const {name, value} = e.target;
    MySpecActions.setDpsOption({name, value});
  }

  componentDidUpdate(prevProps, prevState) {
    const {MySpecActions} = this.props;
    const {_id, item_dtl_dv, stype1} = this.props.weaponView.itemInfo;
    const prevId = prevProps.weaponView.itemInfo._id;
    
    if(_id !== prevId) {
      MySpecActions.setDPSOPtionInitial({item_dtl_dv, stype1});
    }
  }

  getRandomDmg = (totalDmg, invenCri, currHeadCounterValue) => {
    let baseTotalDmg = {
      dmg: totalDmg.normalDmg,
      name: 'normal'
    }
    const criRandom = Math.floor(Math.random() * 100) + 1;
    const headRandom = Math.floor(Math.random() * 1000) + 1;
    if(criRandom <= invenCri) { //크리or치명
      if(currHeadCounterValue === '1') { //크리/10확률로 헤드샷(카운터)
        baseTotalDmg = {
          dmg: headRandom <= Number(invenCri) ? totalDmg.headDmg : totalDmg.criDmg,
          name: headRandom <= Number(invenCri) ? 'counter' : 'cri'
        }
      }else if(currHeadCounterValue === '2' || currHeadCounterValue === '6') { //헤드샷50%
        baseTotalDmg = {
          dmg: headRandom <= 500 ? totalDmg.headDmg : totalDmg.criDmg,
          name: headRandom <= 500 ? 'head' : 'cri'
        }
      }else if(currHeadCounterValue === '3') { //헤드샷100%
        baseTotalDmg = {
          dmg: totalDmg.headDmg,
          name: 'head'
        }
      }else if(currHeadCounterValue === '4') { //헤드샷90%
        baseTotalDmg = {
          dmg: headRandom <= 900 ? totalDmg.headDmg : totalDmg.criDmg,
          name: headRandom <= 900 ? 'head' : 'cri'
        }
      }else if(currHeadCounterValue === '5') { //헤드샷60%
        baseTotalDmg = {
          dmg: headRandom <= 600 ? totalDmg.headDmg : totalDmg.criDmg,
          name: headRandom <= 600 ? 'head' : 'cri'
        }
      }
    }else{
      baseTotalDmg = {
        dmg: totalDmg.normalDmg,
        name: 'normal'
      }
    }
    const dmgRandomBetween = (Number(baseTotalDmg.dmg.max) - Number(baseTotalDmg.dmg.min) + 1);
    const dmgRandom = Math.floor(Math.random() * dmgRandomBetween) + Number(baseTotalDmg.dmg.min);

    return {dmg: dmgRandom, name: baseTotalDmg.name};
  }

  huntStart = () => {
    const timeSpeed = 10; //배속
    const second = 1000 / timeSpeed;
    const {speed} = this.props.weaponView.itemInfo;
    const {totalDmg, invenCri} = this.props.myStat
    const {currInterval, currDmgInterval, currHeadCounterValue, currFireInterval, currFireUseInterval} = this.props.dpsSim;
    if(currInterval !== null || currDmgInterval !== null) {
      alert('사냥중 입니다. 사냥중단 후 다시 해보세요');
      return false;
    }

    clearInterval(currInterval);
    clearInterval(currDmgInterval);
    clearInterval(currFireInterval);
    clearInterval(currFireUseInterval);
    
    const interval = setInterval(() => {
      const {MySpecActions, dpsSim} = this.props;
      const currHuntSecond = Number(dpsSim.huntSecond) + 1;
      MySpecActions.setHuntSecond({currHuntSecond, interval});
    }, second);
    
    const dmgInterval = setInterval(() => {
      const {MySpecActions, dpsSim} = this.props;
      const {dmgRandomSum} = dpsSim;
      const dmgRandom = this.getRandomDmg(totalDmg, invenCri, currHeadCounterValue);
      
      MySpecActions.setDmgRandom({dmgRandom, dmgInterval, dmgRandomSum});
    }, second * (60 / Number(speed)));

    const fireInterval = setInterval(() => {
      const {MySpecActions, dpsSim} = this.props;
      const {fireCoolTime, fireUseTime, fireUse} = dpsSim;
      let currFireCoolTime = Number(fireCoolTime);
      let currFireUseTime = Number(fireUseTime);
      let currFireUse = fireUse;

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

      MySpecActions.setFireCoolTime({currFireCoolTime, currFireUseTime, currFireUse, fireInterval});
    }, second);
  }

  huntStop = () => {
    const {currInterval, currDmgInterval, currFireInterval} = this.props.dpsSim;
    clearInterval(currInterval);
    clearInterval(currDmgInterval);
    clearInterval(currFireInterval);

    const {MySpecActions} = this.props;
    MySpecActions.secondInitial();
  }
  
  render() {
    const {setDPSOption, huntStart, huntStop} = this;
    const {
      currHeadCounterValue, currHeadCounterList, currFireValue, 
      currFireList, huntSecond, dmgRandom, dmgRandomSum, 
      fireUse, fireCoolTime, fireUseTime
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