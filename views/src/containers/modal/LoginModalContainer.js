import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import {withRouter} from 'react-router-dom';

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
    console.log('componentDidMount');
    window.addEventListener('keyup', this.onKeyUp);
  }
 
  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const {onCancel, naverLogin} = this;
    const {visible, href} = this.props;
    
    return (
      <LoginModal
      visible={visible}
      href={href}
      onCancel={onCancel}
      naverLogin={naverLogin}/>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'login', 'visible']),
    href: state.base.getIn(['modal', 'login', 'href'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(LoginModalContainer));