import React, { Component } from 'react';
import WeaponView from 'components/weapon/WeaponView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
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

  render() {
    const {itemInfo} = this.props.weaponView;
    const {currWeaponUpDv, location, loading} = this.props;
    const {pathname} = location;
    
    return (
      <WeaponView 
      itemInfo={itemInfo}
      currWeaponUpDv={currWeaponUpDv}
      pathname={pathname}
      loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView,
    currWeaponUpDv: state.weapon.toJS().currWeaponUpDv,
    loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(withRouter(WeaponViewContainer));