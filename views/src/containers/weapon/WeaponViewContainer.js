import React, { Component } from 'react';
import WeaponView from 'components/weapon/WeaponView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import {withRouter} from 'react-router-dom';
// import { withDone } from 'react-router-server';
import scrollToComponent from 'react-scroll-to-component';

class WeaponViewContainer extends Component {

  getWeaponView = (id) => {
    const {WeaponActions} = this.props;
    WeaponActions.getWeaponView(id);
  }

  componentDidMount() {
    const {id} = this.props;
    const {pathname} = this.props.location;
    
    if(id) {
      this.getWeaponView(id);
    }

    if(pathname.indexOf('/wp') > -1) {
      window.scrollTo(0, 0);
    }else if(pathname.indexOf('/custom') > -1) {
      scrollToComponent(this.weaponViewDiv, {
        offset: -100,
        align: 'top',
        duration: 500
      });
    }
  }

  componentDidUpdate() {
    const {pathname} = this.props.location;

    if(pathname.indexOf('/custom') > -1) {
      scrollToComponent(this.weaponViewDiv, {
        offset: -100,
        align: 'top',
        duration: 500
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {weaponView} = this.props;
    return weaponView.itemInfo._id !== nextProps.weaponView.itemInfo._id;
  }

  render() {
    const {itemInfo} = this.props.weaponView;
    const {currWeaponUpDv, loading} = this.props;
    
    return (
      <div ref={(ref) => this.weaponViewDiv = ref}>
      <WeaponView 
      itemInfo={itemInfo}
      currWeaponUpDv={currWeaponUpDv}
      loading={loading}
      />
      </div>
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