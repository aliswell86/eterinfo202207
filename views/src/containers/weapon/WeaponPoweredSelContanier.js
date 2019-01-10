import React, { Component } from 'react';
import WeaponPoweredSel from 'components/weapon/WeaponPoweredSel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import * as myspecActions from 'store/modules/myspec';
import isEmptyObject from 'is-empty-object';

class WeaponPoweredSelContanier extends Component {

  handleUpdvEvent = (e) => {
    const {name, value, checked} = e.target;
    const {WeaponActions, currWeaponUpDv, weaponView} = this.props;
    const isWeaponView = isEmptyObject(weaponView.itemInfo);

    if(!isWeaponView && (currWeaponUpDv.get(name) !== value)) {
      if(name === 'isCriUp') {
        WeaponActions.setWeaponUpDv({name, checked});
      }else{
        WeaponActions.setWeaponUpDv({name, value});
        WeaponActions.setWeaponUpDmg();
      }  

      
    }    
  }

  render() {
    const {handleUpdvEvent} = this;
    const {loading, currWeaponUpDv} = this.props;

    return (
      <WeaponPoweredSel setWeaponUpDv={handleUpdvEvent} loading={loading} currWeaponUpDv={currWeaponUpDv.toJS()}/>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const currWeaponDmg = this.props.weaponView.itemInfo.dmg;
    const currWeaponCri = this.props.weaponView.itemInfo.cri;
    const currWeaponStype1 = this.props.weaponView.itemInfo.stype1;
    const {MySpecActions} = this.props;
    console.log(currWeaponCri, currWeaponDmg);
    if(prevProps.weaponView.itemInfo.dmg !== currWeaponDmg ||
        prevProps.weaponView.itemInfo.cri !== currWeaponCri) {
      MySpecActions.getInvenDmage({currWeaponDmg, currWeaponCri, currWeaponStype1});
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