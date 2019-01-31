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

  naverlogincallback = () => {
    console.log('naverlogincallback');
    const {BaseActions} = this.props;
    BaseActions.naverlogincallback();
    return null;
  }

  componentDidMount() {
      window.addEventListener('keyup', this.onKeyUp);
  }
 
  componentWillUnmount() {
      window.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const {onCancel, naverLogin, naverlogincallback} = this;
    const {visible, href} = this.props;
    
    return (
      <LoginModal
      visible={visible}
      href={href}
      onCancel={onCancel}
      naverLogin={naverLogin}
      naverlogincallback={naverlogincallback}/>
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
)(LoginModalContainer);