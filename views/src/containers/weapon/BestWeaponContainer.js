import React, { Component } from 'react';
import BestWeapon from 'components/weapon/BestWeapon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';
import moment from 'moment';

class BestWeaponContainer extends Component {

  componentDidMount() {
    const {WeaponActions, bestItems} = this.props;
    const {week, month} = bestItems;

    if(week.length === 0 || month.length === 0) {
      const yesterDay = moment().add(-1, 'days').format('YYYY-M-D');
      const beforeWeekDay = moment().add(-8, 'days').format('YYYY-M-D');
      const url = 
        'https://www.googleapis.com/analytics/v3/data/ga?' + 
        'ids=ga%3A179440961&' +
        `start-date=${beforeWeekDay}&` +
        `end-date=${yesterDay}&` + 
        'metrics=ga%3Apageviews&' +
        'dimensions=ga%3ApagePath&' +
        'sort=-ga%3Apageviews&' +
        'max-results=100&' +
        'access_token=ya29.Glu4Bmr8-t6jPzndtUFpVEZIifo2JSTu6erFE-KSOPO4OXMJezdPo3uvCu2-pfRfKJgVnH6-XphKU-l6p8kuNPV5xNUnhjlA0UUu44u9AZdR4wpZjakbrtZPo9TM';
      console.log(url);
      // WeaponActions.getBestItem(url); //api에서 가져온 내부db
    }
  }

  render() {
    return (
      <BestWeapon/>
    );
  }
}

export default connect(
  (state) => ({
    bestItems: state.weapon.toJS().bestItems,
    // currWeaponUpDv: state.weapon.toJS().currWeaponUpDv,
    // loading: state.pender.pending['weapon/GET_WEAPON_VIEW']
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(BestWeaponContainer);