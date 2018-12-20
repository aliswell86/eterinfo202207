import React, { Component } from 'react';
import WeaponList from 'components/list/WeaponList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
// import { withDone } from 'react-router-server';
//withDone 으로 connect 를 감싸면 데이터가 조회되기전까지 렌더링을 미룸 비교해볼것.
//렌더링 먼저하고 데이터조회 중이라는걸 보여주는게 나아보임..

class WeaponListContainer extends Component {
  render() {
    const {weaponWheres} = this.props;
    return (
      <WeaponList weaponWheres={weaponWheres}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponWheres: state.weapon.toJS().weaponWheres
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponListContainer);