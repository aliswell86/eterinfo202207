import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import LoginModalContainer from 'containers/modal/LoginModalContainer';

class BaseContainer extends Component {

  initialize = () => {
    console.log('initialize');
    const { BaseActions } = this.props;
    console.log("localStorage.logged : " + localStorage.logged);
    if(localStorage.logged === "true") {
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }


  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <LoginModalContainer/>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(BaseContainer);