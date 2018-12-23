import React, { Component } from 'react';
import WeaponWhereBox from 'components/wherebox/WeaponWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
// import { withDone } from 'react-router-server';
//withDone 으로 connect 를 감싸면 데이터가 조회되기전까지 렌더링을 미룸 비교해볼것.
//렌더링 먼저하고 데이터조회 중이라는걸 보여주는게 나아보임..

class WeaponWhereBoxContainer extends Component {

  getWeaponList = () => {
    const {WeaponActions, weaponWhere} = this.props;
    WeaponActions.getWeaponList(weaponWhere);
  }

  componentDidMount() {
    const {weapons} = this.props;
    if(!weapons.length > 0) this.getWeaponList();
  }

  handleWhereSet = (e) => {    
    const {name, value, checked} = e.target;
    const {WeaponActions, weapons} = this.props;

    if(name === 'clyn' || name === 'illegal') {
      WeaponActions.setWeaponWhere({name, value});
    }else{
      WeaponActions.setWeaponWhere({name, checked});
    }
    
    if(weapons.length > 0) {
      WeaponActions.getWeaponWhereList();
    }else{
      this.getWeaponList();
    }
  }

  render() {
    const {handleWhereSet} = this;
    const {loading, weaponWhere} = this.props;

    return (
      <WeaponWhereBox handleWhereSet={handleWhereSet} loading={loading} weaponWhere={weaponWhere}/>
    );
  }
}

export default connect(
  (state) => ({
    weaponWhere: state.weapon.toJS().weaponWhere,
    weapons: state.weapon.toJS().weapons,
    loading: state.pender.pending['weapon/GET_WEAPON_LIST']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(WeaponWhereBoxContainer);