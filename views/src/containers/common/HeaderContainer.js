import React, { Component } from 'react';
import Header from 'components/common/Header'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {

  loginEvent = async () => {
    const {BaseActions, logged} = this.props;
    console.log(logged);
    // if(logged) {
    //   try {
    //     await BaseActions.logout();
    //     window.location.reload();
    //   } catch(e) {
    //     console.log(e);
    //   }

    //   return;
    // }

    // BaseActions.showNaverLogin();
  }

  render() {
    const {loginEvent} = this;
    const {logged, profileId} = this.props;
    console.log(logged, profileId);
    return (
      <Header
      loginEvent={loginEvent}
      logged={logged}
      profileId={profileId}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    token: state.base.get('token'),
    stateKey: state.base.get('stateKey'),
    profileId: state.base.get('profileId')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);