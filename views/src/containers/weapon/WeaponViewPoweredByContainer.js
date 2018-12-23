import React, { Component } from 'react';
import WeaponViewPoweredBy from 'components/weapon/WeaponViewPoweredBy';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
// import { withDone } from 'react-router-server';

class WeaponViewPoweredByContainer extends Component {

  getWeaponView = (id) => {
    const {WeaponActions} = this.props;
    WeaponActions.getWeaponView(id);
  }

  componentDidMount() {
    const {location} = this.props;
    const {id} = queryString.parse(location.search);
    
    if(id) {
      this.getWeaponView(id);
    }
  }

  render() {
    const {poweredByDmg, itemInfo} = this.props.weaponView;
    
    return (
      <WeaponViewPoweredBy poweredByDmg={poweredByDmg} itemInfo={itemInfo}/>
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
)(withRouter(WeaponViewPoweredByContainer));