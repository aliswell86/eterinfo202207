import React, { Component } from 'react';
import DPSSimul from 'components/myspec/DPSSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';
import * as weaponActions from 'store/modules/weapon';

class DPSSimulContainer extends Component {

  setDPSOption = (e) => {
    const {MySpecActions} = this.props;
    const {name, value} = e.target;
    MySpecActions.setDpsOption({name, value});
  }

  componentDidMount() {
    const {itemInfo} = this.props;
  }

  render() {
    const {setDPSOption} = this;
    const {itemInfo, dpsSim} = this.props;
    const {headCounterOption, currHeadCounterOption} = dpsSim;
    const {item_dtl_dv, stype1} = itemInfo;
    const headCounterOptionList = headCounterOption.filter(option =>
      (
        item_dtl_dv === '중화기' || item_dtl_dv === '장창' ?
        option.weaponType === item_dtl_dv :
        option.stype1 === stype1 && (option.weaponType !== '중화기' && option.weaponType !== '장창')
      )
    );
    
    return (
      <DPSSimul
      setDPSOption={setDPSOption}
      currHeadCounterOption={currHeadCounterOption}
      headCounterOptionList={headCounterOptionList}/>
    );
  }
}

export default connect(
  (state) => ({
    itemInfo: state.weapon.toJS().weaponView.itemInfo,
    dpsSim: state.myspec.toJS().dpsSim
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch),
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(DPSSimulContainer);