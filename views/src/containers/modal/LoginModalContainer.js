import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  render() {
    const {visible} = this.props;
    
    return (
      <LoginModal
      visible={visible}/>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'login'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);