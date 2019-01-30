import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {

  onCancel = () => {
    const {BaseActions} = this.props;
    BaseActions.hideModal('login');
  }

  onKeyUp = (e) => {
    if(e.key === 'Escape') {
      this.onCancel();
    }
  }

  naverLogin = () => {
    const {BaseActions} = this.props;
    BaseActions.naverLogin();
  }

  componentDidMount() {
      window.addEventListener('keyup', this.onKeyUp);
  }
 
  componentWillUnmount() {
      window.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const {onCancel, naverLogin} = this;
    const {visible} = this.props;
    
    return (
      <LoginModal
      visible={visible}
      onCancel={onCancel}
      naverLogin={naverLogin}/>
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