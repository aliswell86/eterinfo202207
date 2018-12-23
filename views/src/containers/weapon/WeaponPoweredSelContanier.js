import React, { Component } from 'react';
import WeaponPoweredSel from 'components/weapon/WeaponPoweredSel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class WeaponPoweredSelContanier extends Component {

  handleUpdvEvent = (e) => {
    const {name, value} = e.target;
    const {WeaponActions} = this.props;
    WeaponActions.setWeaponUpDv({name, value});
    WeaponActions.setWeaponUpDmg();
  }

  render() {
    const {handleUpdvEvent} = this;
    const {loading} = this.props;

    return (
      <WeaponPoweredSel setWeaponUpDv={handleUpdvEvent} loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponPoweredSelContanier);