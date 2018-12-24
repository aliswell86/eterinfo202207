import React, { Component } from 'react';
import WeaponView from 'components/weapon/WeaponView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import {withRouter} from 'react-router-dom';
// import { withDone } from 'react-router-server';

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

  componentDidUpdate(prevProps, prevState) {
    const {id} = this.props;
    
    if(id !== prevProps.id) {
      this.getWeaponView(id);
    }

    // const weaponViewDivOffsetTop = this.weaponViewDiv.offsetTop;
    // window.scrollTo(0, weaponViewDivOffsetTop);
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