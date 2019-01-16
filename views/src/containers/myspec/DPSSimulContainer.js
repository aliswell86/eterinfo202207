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

  huntSecond = () => {
    let i = 0;
    setInterval(() => {
      i += 1;
    }, 1000);

    return i;
  }

  componentDidUpdate(prevProps, prevState) {
    const {MySpecActions} = this.props;
    const {_id, item_dtl_dv, stype1} = this.props.weaponView.itemInfo;
    const prevId = prevProps.weaponView.itemInfo._id;
    
    if(_id !== prevId) {
      MySpecActions.setDPSOPtionInitial({item_dtl_dv, stype1});
    }
  }

  render() {
    const {setDPSOption, huntStart, huntSecond} = this;
    const {currHeadCounterValue, currHeadCounterList, currFireValue, currFireList} = this.props.dpsSim;
    
    return (
      <DPSSimul
      setDPSOption={setDPSOption}
      currHeadCounterValue={currHeadCounterValue}
      currHeadCounterList={currHeadCounterList}
      currFireValue={currFireValue}
      currFireList={currFireList}
      huntStart={huntStart}
      huntSecond={huntSecond}/>
    );
  }
}

export default connect(
  (state) => ({
    dpsSim: state.myspec.toJS().dpsSim,
    weaponView: state.weapon.toJS().weaponView
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch)
  })
)(DPSSimulContainer);