import React, { Component } from 'react';
import WeaponView from 'components/weapon/WeaponView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import * as myspecActions from 'store/modules/myspec';
import {withRouter} from 'react-router-dom';
// import { withDone } from 'react-router-server';
// import scrollToComponent from 'react-scroll-to-component';

class WeaponViewContainer extends Component {

  getWeaponView = (id) => {
    const {WeaponActions} = this.props;
    WeaponActions.getWeaponView(id);
  }

  componentDidMount() {
    const {id} = this.props;
    
    if(id) {
      this.getWeaponView(id);
    }

    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevId = nextProps.weaponView.itemInfo._id;
    const prevDmg = nextProps.weaponView.itemInfo.dmg;
    const prevCri = nextProps.weaponView.itemInfo.cri;
    const currId = this.props.weaponView.itemInfo._id;
    const currDmg = this.props.weaponView.itemInfo.dmg;
    const currCri = this.props.weaponView.itemInfo.cri;

    return prevId !== currId || prevDmg !== currDmg || prevCri !== currCri;
  }

  settingLoad = () => {
    const settingInfo = JSON.parse(localStorage.getItem('ETERINFO_SETTING'));
    const {WeaponActions, MyspecActions} = this.props;
    const {weaponView, currWeaponUpDv, myStat, dpsSim} = settingInfo;
    WeaponActions.settingLoadWeapon({weaponView, currWeaponUpDv});
    MyspecActions.settingLoadMySpec({myStat, dpsSim});
  }

  settingSave = () => {
    const {weaponView, currWeaponUpDv, dpsSim, myStat} = this.props;
    const settingInfo = {
      weaponView: weaponView,
      currWeaponUpDv: currWeaponUpDv,
      myStat: myStat,
      dpsSim: dpsSim
    }

    localStorage.setItem('ETERINFO_SETTING', JSON.stringify(settingInfo));
    alert('저장완료');
  }

  render() {
    const {itemInfo} = this.props.weaponView;
    const {currWeaponUpDv, location, loading} = this.props;
    const {pathname} = location;
    const {settingSave, settingLoad} = this;
    
    return (
      <WeaponView 
      itemInfo={itemInfo}
      currWeaponUpDv={currWeaponUpDv}
      pathname={pathname}
      loading={loading}
      settingSave={settingSave}
      settingLoad={settingLoad}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    currWeaponUpDv: state.weapon.toJS().currWeaponUpDv,
    dpsSim: state.myspec.toJS().dpsSim,
    myStat: state.myspec.toJS().myStat,
    loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch),
    MyspecActions: bindActionCreators(myspecActions, dispatch)
  })
)(withRouter(WeaponViewContainer));