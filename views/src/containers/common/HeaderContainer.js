import React, { Component } from 'react';
import Header from 'components/common/Header'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {

  loginModalOpen = () => {
    const {BaseActions} = this.props;

    BaseActions.showNaverLogin();
  }

  render() {
    const {loginModalOpen} = this;

    return (
      <Header loginModalOpen={loginModalOpen}/>
    );
  }
}

export default connect(
  (state) => ({
    // logged: state.base.get('logged')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);