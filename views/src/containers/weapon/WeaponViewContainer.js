import React, { Component } from 'react';
import WeaponView from 'components/weapon/WeaponView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import { withDone } from 'react-router-server';

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
  }

  render() {
    const {weaponView} = this.props;
    return (
      <WeaponView weaponView={weaponView}/>
    );
  }
}

export default withDone(connect(
  (state) => ({
    weaponView: state.weapon.toJS().weaponView
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponViewContainer));