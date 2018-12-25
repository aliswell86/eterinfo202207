import React, { Component } from 'react';
import WeaponPoweredSel from 'components/weapon/WeaponPoweredSel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import * as myspecActions from 'store/modules/myspec';
import isEmptyObject from 'is-empty-object';

class WeaponPoweredSelContanier extends Component {

  handleUpdvEvent = (e) => {
    const {name, value} = e.target;
    const {WeaponActions, currWeaponUpDv, weaponView} = this.props;
    const isWeaponView = isEmptyObject(weaponView.itemInfo);

    if(!isWeaponView && (currWeaponUpDv.get(name) !== value)) {
      WeaponActions.setWeaponUpDv({name, value});
      WeaponActions.setWeaponUpDmg();    
    }    
  }

  render() {
    const {handleUpdvEvent} = this;
    const {loading} = this.props;

    return (
      <WeaponPoweredSel setWeaponUpDv={handleUpdvEvent} loading={loading}/>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const currWeaponDmg = this.props.weaponView.itemInfo.dmg;
    const {MySpecActions} = this.props;

    if(prevProps.weaponView.itemInfo.dmg !== currWeaponDmg) {
      MySpecActions.getInvenDmage(currWeaponDmg);
    }
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    currWeaponUpDv: state.weapon.get('currWeaponUpDv'),
    loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch),
    MySpecActions: bindActionCreators(myspecActions, dispatch)
  })
)(WeaponPoweredSelContanier);