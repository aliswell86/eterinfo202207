import React, { Component } from 'react';
import UpgradeCost from 'components/upgrade/UpgradeCost';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import * as upgradeActions from 'store/modules/upgrade';

class UpgradeCostContainer extends Component {

  setUpgradeTax = (e) => {
    const {name, value} = e.target;
    const {UpgradeActions, upgradeInfo} = this.props;

    if(upgradeInfo.tax !== value) {
      UpgradeActions.setUpgradeTax({name, value});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevId = nextProps.weaponView.itemInfo._id;
    const currId = this.props.weaponView.itemInfo._id;
    const prevTax = nextProps.upgradeInfo.tax;
    const currTax = this.props.upgradeInfo.tax;
    return prevId !== currId || prevTax !== currTax;
  }

  render() {
    const {setUpgradeTax} = this;
    const {upgradeInfo} = this.props;
    const {itemInfo} = this.props.weaponView;
    
    return (
      <UpgradeCost itemInfo={itemInfo} upgradeInfo={upgradeInfo} setUpgradeTax={setUpgradeTax}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    upgradeInfo: state.upgrade.toJS().upgradeInfo
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch),
    UpgradeActions: bindActionCreators(upgradeActions, dispatch)
  })
)(UpgradeCostContainer);