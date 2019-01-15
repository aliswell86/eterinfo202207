import React, { Component } from 'react';
import WeaponPoweredSel from 'components/weapon/WeaponPoweredSel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import * as myspecActions from 'store/modules/myspec';
import {fromJS} from 'immutable';
import isEmptyObject from 'is-empty-object';

class WeaponPoweredSelContanier extends Component {

  handleUpdvEvent = (e) => {
    const {name, value, checked} = e.target;
    const {WeaponActions, currWeaponUpDv, weaponView} = this.props;
    const isWeaponView = isEmptyObject(weaponView.itemInfo);

    if(!isWeaponView && (fromJS(currWeaponUpDv).get(name) !== value)) {
      if(name === 'isCriUp') {
        WeaponActions.setWeaponUpDv({name, checked});
        WeaponActions.setWeaponUpCri();
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
      <WeaponPoweredSel setWeaponUpDv={handleUpdvEvent} loading={loading} currWeaponUpDv={currWeaponUpDv}/>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const {MySpecActions, weaponView} = this.props;
    const {dmg, cri, stype1, size} = weaponView.itemInfo;
    
    if(prevProps.weaponView.itemInfo.dmg !== dmg || prevProps.weaponView.itemInfo.cri !== cri) {
      MySpecActions.getInvenDmage({dmg, cri, stype1, size});
    }
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    currWeaponUpDv: state.weapon.toJS().currWeaponUpDv,
    loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch),
    MySpecActions: bindActionCreators(myspecActions, dispatch)
  })
)(WeaponPoweredSelContanier);