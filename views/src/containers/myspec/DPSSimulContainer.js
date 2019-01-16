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
    let baseTotalDmg = {}
    const criRandom = Math.floor(Math.random() * 100) + 1;
    const headRandom = Math.floor(Math.random() * 1000) + 1;
    if(criRandom <= invenCri) { //크리or치명
      if(currHeadCounterValue === '1') { //크리/10확률로 헤드샷(카운터)
        baseTotalDmg = headRandom <= Number(invenCri) ? totalDmg.headDmg : totalDmg.criDmg;
      }else if(currHeadCounterValue === '2' || currHeadCounterValue === '6') { //헤드샷50%
        baseTotalDmg = headRandom <= 500 ? totalDmg.headDmg : totalDmg.criDmg;
      }else if(currHeadCounterValue === '3') { //헤드샷100%
        baseTotalDmg = totalDmg.headDmg;
      }else if(currHeadCounterValue === '4') { //헤드샷90%
        baseTotalDmg = headRandom <= 900 ? totalDmg.headDmg : totalDmg.criDmg;
      }else if(currHeadCounterValue === '5') { //헤드샷60%
        baseTotalDmg = headRandom <= 600 ? totalDmg.headDmg : totalDmg.criDmg;
      }
    }else{
      baseTotalDmg = totalDmg.normalDmg 
    }
    console.log(criRandom, criRandom <= invenCri ? '크리' : '노말', headRandom);
    console.log(baseTotalDmg);
  }

  huntStart = () => {
    const {speed} = this.props.weaponView.itemInfo;
    const {totalDmg, invenCri} = this.props.myStat
    const {currInterval, currHeadCounterValue} = this.props.dpsSim;
    if(currInterval !== null) {
      alert('사냥중 입니다. 사냥중단 후 다시 해보세요');
      return false;
    }
    clearInterval(currInterval);
    
    // const interval = setInterval(() => {
    //   const {MySpecActions, dpsSim} = this.props;
    //   const currHuntSecond = Number(dpsSim.huntSecond) + 1
    //   MySpecActions.setHuntSecond({currHuntSecond, interval});
    // }, 1000);
    
    const dmgInterval = setInterval(() => {
      this.getRandomDmg(totalDmg, invenCri, currHeadCounterValue);
    }, 1000 * (60 / Number(speed)));
  }

  huntStop = () => {
    const {currInterval} = this.props.dpsSim;
    clearInterval(currInterval);

    const {MySpecActions} = this.props;
    const currHuntSecond = '0';
    const interval = null;
    MySpecActions.setHuntSecond({currHuntSecond, interval});
  }

  render() {
    const {setDPSOption, huntStart, huntStop} = this;
    const {currHeadCounterValue, currHeadCounterList, currFireValue, currFireList, huntSecond} = this.props.dpsSim;
    
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