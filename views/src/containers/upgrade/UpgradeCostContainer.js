import React, { Component } from 'react';
import UpgradeCost from 'components/upgrade/UpgradeCost';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class UpgradeCostContainer extends Component {
  render() {
    const {itemInfo} = this.props.weaponView;
    
    return (
      <UpgradeCost itemInfo={itemInfo}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(UpgradeCostContainer);